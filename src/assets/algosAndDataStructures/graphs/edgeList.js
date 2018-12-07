import { GraphNode, NodeList } from './adjList';

// can only represent edges between vertices
// pretty good for undirected graphs but kinda bad O()
function EdgeMatrix() {
    this.matrix = [];
};

// check if a given edge is in the matrix
// returns [bool, index]
// index is -1 if false
EdgeMatrix.prototype.containsEdge = function(v1, v2) {
    for (let i = 0; i < this.matrix.length; i++) {
        const edge = this.matrix[i];
        if (edge[0] === v1 && edge[1] === v2) {
            return [true, i];
        }
        /* if undirected:
        else if (edge[0] === v2 && edge[1] === v1) {
            return [true, i];
        }
        */
    }
    return [false, -1];
}

// add an edge if not in graph
// returns true if added
EdgeMatrix.prototype.add = function(v1, v2) {
    const [containsEdge, index] = this.containsEdge(v1, v2);
    if (!containsEdge) {
        // if not in graph, add it in sorted order
        this.matrix.splice(index, 0, [v1, v2]);
    }
    return containsEdge;
};

// delete an edge from one vertex to another
// returns true if deleted
EdgeMatrix.prototype.delete = function(v1, v2) {
    const [containsEdge, index] = this.containsEdge(v1, v2);
    if (containsEdge) {
        this.matrix.splice(index, 1);
    }
    return containsEdge;
};

// insert an edge between v1 and v2
EdgeMatrix.prototype.insert = function(v1, vNew, v2) {
    // delete edge from v1 to v2
    this.delete(v1, v2);
    // even if [v1, v2] not in matrix, add edges from v1 to vNew and from vNew to v2
    this.add(v1, vNew);
    this.add(vNew, v2);
};

// find neighbors to a given vertex
// returns map of <neighbor, index>
EdgeMatrix.prototype.findNeighbors = function(vertex, startIndex) {
    const neighbors = new Map();
    let found = false;
    startIndex = startIndex || 0;
    for (let i = startIndex; i < this.matrix.length; i++) {
        const edge = this.matrix[i];
        if (edge[0] === vertex) {
            neighbors.set(edge[1], i);
            found = true;
        } else if (found) break; // found the edge and passed it (as they're sorted)
        /* if undirected, comment out things referencing 'found'
        else if (edge[1] === vertex) {
            neighbors.set(edge[0], i);
        }
        */
    }
    return neighbors;
};

// if a node hasn't been visited, mark it as such and log that to the console
// could use a 'visited' flag on node, but we'd need to clear it each time
// or a 'count' property on nodeList and an incrementing number for 'visited' on node...
// etc
EdgeMatrix.prototype._printOnce = function(value, visited) {
	if (!visited.has(value)) {
		visited.add(value);
        console.log(value);
        return false; // not visited before this
	} else {
        return true; // visited before this
    }
};

EdgeMatrix.prototype.bfs = function() {
    let curV;
    let visited = new Set();
    for (let i = 0; i < this.matrix.length; i++) {
        const edge = this.matrix[i];
        // check if we're in a new origin node
        let tempCurV = edge[0];
        if (tempCurV !== curV) {
            curV = tempCurV;
            // if new origin node, print it
            this._printOnce(curV, visited);
        }
        // print all vertices pointed to from origin node
        // could rework to use findNeighbors + accumulator
        this._printOnce(edge[1], visited);
    }
};

// TODO: fix
EdgeMatrix.prototype.dfs = function() {
    let visited = new Set();
    for (let i = 0; i < this.matrix.length; i++) {
        const edge = this.matrix[i];
        this._printOnce(edge[0], visited);
        // walk from edge[1] to next edge[0] that matches edge[1]
        this._dfsHelper(i, edge[1], visited)
    }
};
EdgeMatrix.prototype._dfsHelper = function(origin, vertex, visited) {
    this._printOnce(vertex, visited);
    const [next, index] = this.nextEdge(origin, vertex);
    if (next) { // if there's a pair where edge[1] === next[0]
        this._dfsHelper(index, next[1], visited);
    }
    this._dfsHelper(0, vertex, visited);
};
EdgeMatrix.prototype.nextEdge = function(origin, vertex) {
    for (let i = origin + 1; i < this.matrix.length; i++) {
        const edge = this.matrix[i];
        if (edge[0] === vertex) {
            return [edge, i];
        }
    }
    for (let j = origin - 1; j >= 0; j--) {
        const edge = this.matrix[j];
        if (edge[0] === vertex) {
            return [edge, j];
        }
    }

    return [null, -1];
};