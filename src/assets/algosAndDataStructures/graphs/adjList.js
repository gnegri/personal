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
    if (node.value === value) return true;
    while (node.next) {
        node = node.next;
        if (node.value === value) return true;
    }
    return false;
}

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

// if a node hasn't been visited, mark it as such and log that to the console
// could use a 'visited' flag on node, but we'd need to clear it each time
// or a 'count' property on nodeList and an incrementing number for 'visited' on node...
// etc
NodeList.prototype._printOnce = function(value, visited) {
	if (!visited.has(value)) {
		visited.add(value);
        console.log(value);
        return false; // not visited before this
	} else {
        return true; // visited before this
    }
};

// print nodes, breadth first
NodeList.prototype.bfs = function() {
	const visited = new Set();
	for (let i = 0; i < this.nodeList.length; i++) {
		const node = this.nodeList[i];
		if (typeof node !== 'undefined') {
			this._printOnce(i, visited);
			this._printOnce(node.value, visited);
			let temp = node;
			while (temp.next) {
				temp = temp.next;
				this._printOnce(temp.value, visited);
			}
		}
	}
};

// print nodes, depth first
// probably broken
NodeList.prototype.dfs = function() {
    const visited = new Set();
	for (let i = 0; i < this.nodeList.length; i++) {
		let node = this.nodeList[i];
		if (typeof node !== 'undefined') {
			this._printOnce(i, visited);
			this._dfsHelper(node, visited);
			while (node.next) {
				node = node.next
				this._dfsHelper(node, visited);
			}
		}
    }
};
NodeList.prototype._dfsHelper = function(node, visited) {
	this._printOnce(node.value, visited);
	const next = this.nodeList[node.value];
    if (next && next.value !== node.value) return this._dfsHelper(next, visited);
};

// dfs
// if, for any given origin node, we end up revisiting that node...
// then we have a cycle!
// TODO: fix
NodeList.prototype.containsCycle = function() {
	for (let i = 0; i < this.nodeList.length; i++) {
        const visited = new Set();
        if (this._dfsWrap(i, visited)) {
            return true;
        }
    }
    return false;
}