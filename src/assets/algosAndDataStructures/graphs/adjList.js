import * as ll from '../linkedList.js';

// nodes/vertices within graph
class GraphNode extends ll.LLNode {
    constructor(value, weight) {
        super(value);
        this.weight = weight; // edge length from origin to node.
    };
}

// an array where each index defines origin node
// each index points to a graph node (linked list) where each
// node in the list represents an edge from index i to node.value
// thus the edges from node.value are found in nodeList[node.value]
function NodeList() {
    this.nodeList = [];
};

// add a node
NodeList.prototype.add = function(origin, value, weight, node) {
    // get last node
    if (!node && value !== null) node = new GraphNode(value, weight);
    let head = this.nodeList[origin];
    if (typeof head !== 'undefined') { // already one or more edges from origin
        // check if list already contains proposed edge
        if (!this.containsEdge(head, value)) {
            head = head.addToHead(null, node);
	        this.nodeList[origin] = head;
        }
    } else { // no edges yet
        head = node;
        this.nodeList[origin] = head;
    }
};

NodeList.prototype.containsEdge = function(head, value) {
    let node = head;
    while (node) {
        if (node.value === value) return true;
        node = node.next;
    }
    return false;
};

NodeList.prototype.getWeight = function(v1, v2) {
	let node = this.nodeList[v1.value];
	while (node) {
		if (node.value === v2) return node.weight;
		node = node.next;
	}
	return 'no edge'
};

// insert a node between two others
NodeList.prototype.insert = function(preValue, preWeight, nodeValue, postWeight, postValue) {
	this.unLink(this.nodeList[preValue], postValue, preValue);
	this.add(preValue, nodeValue, preWeight);
	this.add(nodeValue, postValue, postWeight);
};

// remove a node entirely
NodeList.prototype.delete = function(value) {
	delete this.nodeList[value];
	for (let i = 0; i < this.nodeList.length; i++) {
		let node = this.nodeList[i];
		if (typeof node !== 'undefined') {
            this.unLink(node, value, i)
		}
	}
};

// unlink a node from its origin
NodeList.prototype.unLink = function(node, value, i) {
	const [curNode, lastNode] = node.find(value);
	if (curNode !== null) {
		if (lastNode !== null) {
			lastNode.next = curNode.next;
		} else {
			this.nodeList[i] = curNode.next;
		}
	}
};

// could use a 'visited' flag on node, but we'd need to clear it each time or
// initialize visited to false and copy the entire array so we can set it without
// 		mutating the actual array
// or a 'count' property on nodeList and an incrementing number for 'visited' on node...
// etc
NodeList.prototype._printOnce = function(value, visited) {
	if (!visited.has(value)) {
		visited.add(value);
        console.log(value);
    }
};

// print nodes, breadth first
NodeList.prototype.bfs = function() {
	const visited = new Set();
	for (let i = 0; i < this.nodeList.length; i++) {
		const node = this.nodeList[i];
		if (typeof node !== 'undefined') {
			this._printOnce(i, visited);
			let temp = node;
			while (temp) {
				this._printOnce(temp.value, visited);
				temp = temp.next;
			}
		}
	}
};

// print nodes, depth first
NodeList.prototype.dfs = function() {
	const visited = new Set();

	for (let i = 0; i < this.nodeList.length; i++) {
		const node = this.nodeList[i];
		if (typeof node !== 'undefined') {
			this._printOnce(i, visited);
			this._dfsHelper(node, visited);
		}
	}
};
NodeList.prototype._dfsHelper = function(node, visited) {
	if (typeof node !== 'undefined') {
		let temp = node;
		while (temp !== null) {
			const val = temp.value;
			if (!visited.has(val)) {
				console.log(val);
				visited.add(val);
				this._dfsHelper(this.nodeList[val], visited);
			}
			temp = temp.next;
		}
	}
};

// dfs
// if, for any given origin node, we end up revisiting that node...
// then we have a cycle!
NodeList.prototype.containsCycle = function() {
	const visited = new Set();

	for (let i = 0; i < this.nodeList.length; i++) {
		const node = this.nodeList[i];
		if (typeof node !== 'undefined') {
			visited.add(i);
			if (this._containsCycleHelper(node, visited)) return true;
		}
    }
    return false;
};
NodeList.prototype._containsCycleHelper = function(node, visited) {
	if (typeof node !== 'undefined') {
		let temp = node;
		while (temp !== null) {
			const val = temp.value;
			if (visited.has(val)) return true;
			else {
				visited.add(val);
				this._containsCycleHelper(this.nodeList[val], visited);
			}
			visited.delete(val);
			temp = temp.next;
		}
	}
	return false;
};

class DijkstraHelper {
	constructor(distance, predecessor) {
		this.distance = distance;
		this.predecessor = predecessor;
	}
}

NodeList.prototype.initSingleSrc = function(vStart) {
	const vList = new Map();
	const initialize = new DijkstraHelper(Number.POSITIVE_INFINITY, null);
	for (let i = 0; i < this.nodeList.length; i++) {
		let node = this.nodeList[i];
		if (typeof node !== 'undefined') {
			vList.set(i, initialize);
			while (node) {
				vList.set(node.value, initialize);
				node = node.next;
			}
		}
	}
	vList.set(vStart, new DijkstraHelper(0, null));
	return vList;
};

NodeList.prototype.relax = function(pq, vList, v1, v2, weight) {
	const v1Dist = vList.get(v1).distance;
	const v2Dist = vList.get(v2).distance;
	const tempWt = v1Dist + weight
	if (v2Dist > tempWt) {
		vList.set(v2, new DijkstraHelper(tempWt, v1));
		pq.insert(tempWt, v2);
	}
};

NodeMatrix.prototype.dijkstraParse = function(vStart, vEnd) {
	const vList = this.dijkstra(vStart);
	return [vList.get(vEnd).distance, this.constructList(vList, vEnd)];
};

NodeList.prototype.dijkstra = function(vStart) {
	const vList = this.initSingleSrc(vStart);
	const pq = new PriorityQueue();
	pq.insert(0, vStart);
	
	while (!pq.isEmpty()) {
		const [min, minLabel] = pq.extractMin();
		let node = this.nodeList[minLabel];
		if (typeof node !== 'undefined') {
			while (node) {
				this.relax(pq, vList, minLabel, node.value, node.weight);
				node = node.next;
			}
		}
	}
	// return list of shortest path from vStart to each node
	return vList;
};

NodeList.prototype.constructList = function(vList, vEnd) {
	let traceBack = [vEnd];
	let node = vList.get(vEnd).predecessor;
	while (node) {
		traceBack.push(node);
		node = vList.get(node).predecessor;
	}
	return traceBack.reverse();
};