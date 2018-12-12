// directed graph
function NodeMatrix() {
    this.matrix = [];
};

// initialize the subarray for given vertex v
NodeMatrix.prototype._addVertex = function(v) {
    this.matrix[v] = [];
};

// add an edge from v1 to v2 with weight weight
NodeMatrix.prototype.addEdge = function(v1, v2, weight) {
	if (!this.containsVertex(v1)) this._addVertex(v1);
    this.matrix[v1][v2] = weight || 1;
};

// check if a subarray for a given vertex v exists
NodeMatrix.prototype.containsVertex = function(v) {
	return (typeof this.matrix[v] !== 'undefined');
};

// check if there is an edge from v1 to v2
NodeMatrix.prototype.containsEdge = function(v1, v2) {
	if (this.containsVertex(v1)) {
		return (typeof this.matrix[v1][v2] !== 'undefined');
	}
	return false;
};

// get the weight of edge v1 to v2
NodeMatrix.prototype.getEdgeWeight = function(v1, v2) {
	if (this.containsEdge(v1, v2)) return this.matrix[v1][v2];
	return 'undefined';
};

// insert vertex vNew between v1 and v2, with new weights w1 for (v1, vNew) and w2 for (vNew, v2)
NodeMatrix.prototype.insertVertex = function(v1, v2, newV, w1, w2) {
	this.deleteEdge(v1, v2);
	this.addEdge(v1, newV, w1);
	this.addEdge(newV, v2, w2);
};

// delete a single edge (v1, v2)
NodeMatrix.prototype.deleteEdge = function(v1, v2) {
	if (this.containsEdge(v1, v2)) delete this.matrix[v1][v2];
};

// delete a vertex v
NodeMatrix.prototype.deleteVertex = function(v) {
	// remove all associations to this vertex
	delete this.matrix[v];
	
	for (let i = 0; i < this.matrix.length; i++) {
        this.deleteEdge(i, v);
        // if deleting this edge removes the last association to vertex i
        this.cleanupDelete(i);
	}
};
NodeMatrix.prototype.cleanupDelete = function(v) {
	if (this.containsVertex(v)) {
		for (let i = 0; i < this.matrix[v].length; i++) {
			if (this.containsEdge(v, i)) return;
		}
		delete this.matrix[v];
	}
    return;
};

// if a node hasn't been visited, mark it as such and log that to the console
NodeMatrix.prototype._printOnce = function(value, visited) {
	if (!visited.has(value)) {
		visited.add(value);
        console.log(value);
    }
	return;
};

// print in breadth-first order
NodeMatrix.prototype.bfs = function() {
	const visited = new Set();
	
	for (let i = 0; i < this.matrix.length; i++) {
		if (this.containsVertex(i)) {
			for (let j = 0; j < this.matrix[i].length; j++) {
				if (this.containsEdge(i, j)) {
					this._printOnce(i, visited);
					this._printOnce(j, visited);
				}
			}
		}
	}
};

// print in depth-first order
NodeMatrix.prototype.dfs = function() {
	const visited = new Set();

	for (let i = 0; i < this.matrix.length; i++) {
        this._dfsHelper(i, visited);
	}
};
NodeMatrix.prototype._dfsHelper = function(i, visited) {
	if (this.containsVertex(i)) {
		for (let j = 0; j < this.matrix[i].length; j++) {
			if (this.containsEdge(i, j) && !visited.has(j)) {
				this._printOnce(i, visited);
				this._printOnce(j, visited);
				this._dfsHelper(j, visited);
			}
		}
	}
};

// search depth-first; if we revisit a vertex during a chain, there is a cycle
NodeMatrix.prototype.containsCycle = function() {
	const visited = new Set();

	for (let i = 0; i < this.matrix.length; i++) {
		if (this._containsCycleHelper(i, visited)) return true;
	}
	return false;
};
NodeMatrix.prototype._containsCycleHelper = function(i, visited) {
	if (this.containsVertex(i)) {
		for (let j = 0; j < this.matrix[i].length; j++) {
			if (this.containsEdge(i, j)) {
				if (visited.has(j))	return true;
				else {
					visited.add(i);
					visited.add(j);
					this._containsCycleHelper(j, visited);
				}
			}
		}
    }
    
	visited.delete(i);
	return false;
};

class DijkstraHelper {
	constructor(distance, predecessor) {
		this.distance = distance;
		this.predecessor = predecessor;
	}
}

NodeMatrix.prototype.initSingleSrc = function(vStart) {
	const vList = new Map();
	const initialize = new DijkstraHelper(Number.POSITIVE_INFINITY, null);
	for (let i = 0; i < this.matrix.length; i++) {
		if (this.containsVertex(i)) {
			for (let j = 0; j < this.matrix[i].length; j++) {
				if (this.containsEdge(i, j)) {
					vList.set(i, initialize);
					vList.set(j, initialize);
				}
			}
		}
	}
	vList.set(vStart, new DijkstraHelper(0, null));
	return vList;
};

NodeMatrix.prototype.dijkstraParse = function(vStart, vEnd) {
	const vList = this.dijkstra(vStart);
	return [vList.get(vEnd).distance, this.constructList(vList, vEnd)];
};

NodeMatrix.prototype.dijkstra = function(vStart) {
	const vList = this.initSingleSrc(vStart);
	const pq = new PriorityQueue();
	pq.insert(0, vStart);
	
	while (!pq.isEmpty()) {
		const [, minLabel] = pq.extractMin();
		if (this.containsVertex(minLabel)) {
			for (let j = 0; j < this.matrix[minLabel].length; j++) {
				if (this.containsEdge(minLabel, j)) {
					this.relax(pq, vList, minLabel, j, this.matrix[minLabel][j]);
				}
			}
		}
	}
	
	// return list of shortest path from vStart to each node
	return vList;
};

NodeMatrix.prototype.relax = function(pq, vList, v1, v2, weight) {
	const v1Dist = vList.get(v1).distance;
	const v2Dist = vList.get(v2).distance;
	const tempWt = v1Dist + weight
	if (v2Dist > tempWt) {
		vList.set(v2, new DijkstraHelper(tempWt, v1));
		pq.insert(tempWt, v2);
	}
};

NodeMatrix.prototype.constructList = function(vList, vEnd) {
	let traceBack = [vEnd];
	let node = vList.get(vEnd).predecessor;
	while (node) {
		traceBack.push(node);
		node = vList.get(node).predecessor;
	}
	return traceBack.reverse();
};
