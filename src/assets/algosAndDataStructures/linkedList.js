// constructor
function LLNode(value) {
    this.value = value;
    this.next = null;
};

LLNode.prototype.error = function() {
    console.log('err');
};

// O(n) add node to end of list
LLNode.prototype.addToEnd = function(value, node) {
    if (!node && value !== null) node = new LLNode(value);
    else {
        this.error();
        return;
    }
    
    let curNode = this;
    while (curNode.next) {
        curNode = curNode.next;
    }
    curNode.next = node;
};

// O(1) add node to front of list
// NEEDS to be called as 'head = head.addToHead(...)'
LLNode.prototype.addToHead = function(value, node) {
    if (!node && value !== null) node = new LLNode(value);
    else {
        this.error();
        return;
    }
    
    node.next = this;
    return node;
};

// O(n) find node object given a specific value
LLNode.prototype.find = function(value) {
    if (!value) {
        this.error();
        return;
    }
    let curNode = this;
    while (curNode.next) {
        if (curNode.next.value === value) {
            return [curNode.next, curNode];
        }
        curNode = curNode.next;
    }
    return [null, null];
};

// O(1)
LLNode.prototype.peek = function() {
    return this.value;
};

// O(1)
// call as [ret, head] = head.pop();
// head.peek();
// head = head.deleteNode([this, null]);
LLNode.prototype.pop = function() {
    let ret = this.peek();
    return [ret, this.deleteNode([this, null])];
};

// O(n) deletion if by value, O(1) if by node
// find is O(n), delete is O(1)
// NEEDS to be called as 'head = head.delete(...)'
LLNode.prototype.delete = function(value, [node, predecessor]) {
    if (!node && value !== null) [node, predecessor] = this.find(value);
    else {
        this.error();
    }

    return this.deleteNode([node, predecessor]); // O(1)
};
LLNode.prototype.deleteNode = function([node, predecessor]) {
    if (!predecessor || node === this) { // removing head node
        node = node.next;
        return this;
    }
    
    predecessor.next = node.next;
    return this;
};

// print each node in order
LLNode.prototype.walk = function() {
    let curNode = this;
    console.log(curNode);
    while (curNode.next) {
        curNode = curNode.next;
        console.log(curNode);
    }
};

// O(n) time & space reverse. preserves old list
LLNode.prototype.reverse = function() {
    // walk and add to new list
    let curNode = this;
    let newPtr = new LLNode(this.value);
    while (curNode.next) {
        curNode = curNode.next;
        newPtr = newPtr.addToHead(curNode.value);
    }

    return newPtr;
};

LLNode.prototype.reverseInPlace = function() {
    if (!this.next) return this;
    let ptr = this; // pointer to old head node, moves through list
    let head = new LLNode(this.value); // pointer to current/new head
    let next = null; // next item after ptr
    // we move ptr down the list while moving the item after pointer to the head of the list
    // need to modify head, ptr, and item after ptr
    while (ptr.next) {
        next = new LLNode(head.value);
        head = new LLNode(ptr.next.value); // set item after ptr to head
        head.next = next; // set new head's next to old head
        ptr.next = ptr.next.next;
    }
    next.next = ptr;
    
    return head;
}