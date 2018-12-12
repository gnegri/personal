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
