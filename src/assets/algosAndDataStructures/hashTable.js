import * as ll from './linkedList.js';

// hash is a map of linked lists; we use ll to resolve collisions
// key is same; value is linked list
function HashTable() {
    this.map = new Map();
};

// add to map with collision handling
HashTable.prototype.add = function(key, value) {
    let node;
    
    if (this.hasKey(key)) { // O(1) key already in map
        node = this.get(key); // O(1)
        node = node.addToHead(value); // O(1)
    } else { // key not in map -> set LLNode as value
		node = new ll.LLNode(value); // O(1)
    }
	
    this.map.set(key, node); // O(1)
};

// gets the linked list
// caller responsible for checking if returned node has node.next set
// worst case O(n), amortized O(1)
HashTable.prototype.get = function(key) {
    return this.map.get(key);
};

// determine if a given key has been associated with any nodes
// O(1)
HashTable.prototype.hasKey = function(key) {
    return (typeof this.map.get(key) !== 'undefined');
};

// determine if a given key has been associated with any nodes
// O(1)
HashTable.prototype.hasKeyValue = function(key, value) {
    if (!this.hasKey(key)) {
        return false;
    }

    let head = this.get(key);
    let [node] = head.find(value); 
    if (!node) return false;
    else return true;
};

// need to pass the value you wish to delete
// worst case O(n), amortized O(1)
HashTable.prototype.delete = function(key, value) {
    // check if key is set at all
    if (!this.has(key)) return false;
    // get head node @ key
    let head = this.get(key);
    // delete associated value in linked list
    head = head.delete(value, []);
    this.map.set(key, head);
};
