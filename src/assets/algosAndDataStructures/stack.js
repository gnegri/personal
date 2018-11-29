// constructor for a node
function Node(value) {
    this.value = value;
    this.next = null;
};

// constructor for a stack
function Stack(topNode) {
    this.topNode = topNode;
};

// placeholder error message for Stack
Stack.prototype.error = function() {
    console.log('err');
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
        this.error();
        return null;
    }
    const ret = this.peek();
    this.topNode = this.topNode.next;
    return ret;
};

// O(1)
Stack.prototype.peek = function() {
    if (this.isEmpty()) {
        this.error();
        return null;
    }
    return this.topNode.value;
};

// O(1)
Stack.prototype.push = function(value) {
    if (!value) {
        this.error();
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