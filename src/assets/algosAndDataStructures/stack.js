// constructor for a node
function Node(value) {
    this.value = value;
    this.next = null;
};

// constructor for a stack
// First in, Last out
function Stack(topNode) {
    this.topNode = topNode;
};

// placeholder error message for Stack
Stack.prototype.error = function(func) {
    console.log('err at ' + func);
};

// iterator
Stack.prototype.iterator = function*() {
    while (!this.isEmpty()) {
        yield this.topNode;
        this.topNode = this.topNode.next;
    }
};

// O(1)
Stack.prototype.pop = function() {
    if (this.isEmpty()) {
        return null;
    }
    const ret = this.peek();
    this.topNode = this.topNode.next;
    return ret;
};

// O(1)
Stack.prototype.peek = function() {
    if (this.isEmpty()) {
        return null;
    }
    return this.topNode.value;
};

// O(1)
Stack.prototype.push = function(value) {
    if (!value) {
        this.error('push');
        return;
    }
    let node = new Node(value);
    node.next = this.topNode;
    this.topNode = node;
};

// O(1)
Stack.prototype.isEmpty = function() {
    return !this.topNode;
};

Stack.prototype.print = function() {
    while (!this.isEmpty()) {
        console.log(this.pop());
    }
}

Stack.prototype.clear = function() {
    this.topNode = null;
}