// constructor for a node
function Node(value) {
    this.value = value;
    this.next = null;
};

// constructor for a stack
// first in, first out
function Queue(node) {
    if (node !== null) node.next = null; // force null next node for safety
    this.first = node;
    this.last = node;
};

// placeholder error message
Queue.prototype.error = function() {
    console.log('err');
};

// O(1) check if Queue is empty
Queue.prototype.isEmpty = function() {
    return !this.first;
};

// O(1) add to end of Queue
Queue.prototype.add = function(value) {
    if (!value) {
        this.error();
        return null;
    }
    let node = new Node(value);
    if (this.last !== null) {
        this.last.next = node;
    }
    this.last = node;

    if (this.isEmpty()) { // cannot be conceptually empty after adding
        this.first = this.last;
    }
};

// O(1) remove from front of Queue
Queue.prototype.remove = function() {
    if (this.isEmpty()) {
        this.error();
        return null;
    }
    const ret = this.peek();
    this.first = this.first.next;
    // if is conceptually empty, need to reflect that in the data
    if (this.isEmpty()) {
        this.last = null; 
    }

    // return the first value
    return ret;
};

// O(1) check front of Queue
Queue.prototype.peek = function() {
    if (this.isEmpty()){
        this.error();
        return null;
    }
    return this.first.value;
};