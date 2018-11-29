// constructor for a node
function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
	// theoretically could implement parent node
};

// constructor for the tree
function BST(rootNode) {
    this.root = rootNode;
};

// definitions for APIs available to BST prototype

// std error message for prototype
BST.prototype.error = function() {
    console.log('err');
};

// for functions that could start at a given node if passed, or the root node if none passed
BST.prototype.getNode = function(node) {
    if (!node) node = this.root;
    if (!node) return null;
    return node;
};

// O(n) walk through tree in sorted order
BST.prototype.inOrderWalk = function(node) {
	node = this.getNode();
    this.inOrderWalkHelp(node);
};
BST.prototype.inOrderWalkHelp = function(node) {
    if (node) {
        this.inOrderWalkHelp(node.left);
        console.log(node.value);
        this.inOrderWalkHelp(node.right);
    }
};

// O(n) Pre order walk. root, then subsequent left subtrees 
// 'pick up by root'
BST.prototype.preOrderWalk = function(node) {
	node = this.getNode();
    this.preOrderWalkHelp(node);
};
BST.prototype.preOrderWalkHelp = function(node) {
    if (node) {
        console.log(node.value);
        this.preOrderWalkHelp(node.left);
        this.preOrderWalkHelp(node.right);
    }
};

// O(n) Post order walk. start at leftmost subtree and move right as though tree were flattened
// 'pull from left'
BST.prototype.postOrderWalk = function(node) {
    node = this.getNode(node);
	this.postOrderWalkHelp(node);
};                            
BST.prototype.postOrderWalkHelp = function(node) {
    if (node) {
        this.postOrderWalkHelp(node.left);
        this.postOrderWalkHelp(node.right);
        console.log(node.value);
    }
};

// func to resolve value & node depending on how things were passed by caller
// O(1)
BST.prototype.getValue = function(value, node) {
    if (!value) value = node.value;
    return value;
};

// O(h). ideal case, h = log(n)
BST.prototype.find = function(value, node) {
    // check for proper input
    if (!value) {
        this.error();
        return [];
    }
    node = this.getNode(node);
    if (value === node.value) return [node];
    
    // walk left if value < value, right otherwise until found
	let parent = null;
    while (value !== node.value && node) {
		if (value < node.value) {
			parent = node;
			node = node.left;
		} else {
			parent = node;
			node = node.right;
		}
    }
    
    // if null, value is not in tree.
    return [node, parent];
};

// O(h). ideal case, h = log(n)
// stack level issue potential, iterative version probably faster
// and requires more work to return parent
// TODO: add way to return parent.
BST.prototype.findRecursive = function(value, node) {
    // check for proper input
    if (!value) {
        this.error();
        return null;
    }
    node = this.getNode(node);
    if (value === node.value) return node;
    
    if (value < node.value) {
		return findRecursive(value, node.left);
    } else {
		return findRecursive(value, node.right);
	}
};

// O(h). ideal case, h = log(n)
// min is leftmost node
BST.prototype.getMin = function(node) {
    node = this.getNode(node);
    
    let parent = null;
    while (node.left) {
        parent = node;
        node = node.left;
    }
	
    // if parent is null we know we are at root
    return [node, parent];
};

// O(h). ideal case, h = log(n)
// max is rightmode node
BST.prototype.getMax = function(node) {
    node = this.getNode(node);
    
    let parent = null;
    while (node.right) {
        parent = node;
        node = node.right;
    }
    
    return [node, parent];
};

// O(h). ideal case, h = log(n)
BST.prototype.insert = function(value) {
    let node = this.root;
    
    // base case -> empty tree
    if (!node) {
        this.root = new Node(value);
        return;
    }
    
    // walk down tree
    while(node) {
        // move left if value < current node value
        if (value < node.value) {
            if (node.left) {
                node = node.left;
            } else {
                // if cannot move left, insert new node
                node.left = new Node(value);
                return;
			}
        // otherwise, move right and insert if cannot
        } else {
            if (node.right) {
                node = node.right;
            } else {
                node.right = new Node(value);
                return;
            }
        }
    }
};

// O(1) removal of a given node
BST.prototype.remove = function([node, parent]) {
    if (!node) {
        this.error();
        return false;
    }
    
    // node is a leaf -> remove reference from parent
    if (!node.left && !node.right) {
        this.swap(node, null, parent);
    // node has one leaf -> replace with child
    } else if (!node.left && node.right) {
        this.swap(node, node.right, parent);
    } else if (node.left && !node.right) {
        this.swap(node, node.left, parent);
    // node has two children
    } else {
        // get min in right subtree
        let [min, minParent] = this.getMin(node.right);
		// case where node.right is the min
		if (!minParent && min !== null) minParent = node;
        if (minParent !== node) {
            this.swap(min, min.right, minParent);
            min.right = node.right;
        }
        this.swap(node, min, parent);
        min.left = node.left;
    }

    return true;
        
};

// O(h) removal of value
// find: O(h)
// remove: O(1)
BST.prototype.removeValue = function(value) {
    return this.remove(this.find(value));
};

// O(1) swap out node 
BST.prototype.swap = function(node, swap, parent) {
	if (!parent) {
		this.root = swap;
    } else if (parent.left === node) {
        parent.left = swap;
    } else {
        parent.right = swap;
    }
};

// Iterate over the tree in sorted order
BST.prototype.inOrderIterator = function*(node) {
	if (!node) return;
	yield* this.inOrderIterator(node.left);
	yield node;
	yield* this.inOrderIterator(node.right);
};

// O(n) check if tree is indeed BST by walking in order rather than checking each node's properties
BST.prototype.isBST = function() {
	const itr = this.inOrderIterator(this.root);
	let lastNode = new Node(Number.NEGATIVE_INFINITY);
	let node = itr.next();
	while (!node.done && node.value) {
		if (node.value.value < lastNode.value) return false;
		lastNode = node.value;
		node = itr.next();
	}
	return true;
};