// this defines a min heap

// constructor
function MinHeap(array = []) {
    this.heap = [...array];
    this.heapSize = array.length;
    this.buildMinHeap();
};


// O(n logn)
MinHeap.prototype.buildMinHeap = function() {    
    if (this.heapSize > 0) {
        for (let index = Math.floor(this.heapSize/2); index >= 0; index--) {
            this.minHeapify(index);
        }
    }
};

// O(n + n logn)
MinHeap.prototype.remove = function(value) {
    for (let i = 0; i < this.heapSize; i++) { // O(n)
        if (this.heap[i] === value) {
            this.heap[i] = this.heap[--this.heapSize];
            this.buildMinHeap(); // O(n logn)
            break;
        }
    }
};

// O(logn)
MinHeap.prototype.minHeapify = function(index) {
    const left = this.left(index);
    const right = this.right(index);
    
    let minIndex = index;
    if (left < this.heapSize && this.heap[left] < this.heap[minIndex]) {
        minIndex = left;
    }
    
    if (right < this.heapSize && this.heap[right] < this.heap[minIndex]) {
        minIndex = right;
    }
    
    if (minIndex !== index) {
        this.swapIndexes(minIndex, index);
        this.minHeapify(minIndex);
    }
};

// O(1)
MinHeap.prototype.getMin = function() {
    return this.heap[0];
};

// O(logn)
MinHeap.prototype.extractMin = function() {
    if (this.heapSize === 0) return null;
    const min = this.getMin();
    this.heap[0] = this.heap[--this.heapSize];
    this.minHeapify(0); // here's where the work is done
    return min;
};

// O(logn)
MinHeap.prototype.insert = function(value) {
    const tmp = this.heapSize;
    this.decKey(tmp, value); // here's where the work is done
    this.heapSize++;
};

// O(logn)
MinHeap.prototype.decKey = function(index, value) {
    this.heap[index] = value;
    while (index >= 0 && this.heap[this.parent(index)] > this.heap[index]) {
        this.swapIndexes(this.parent(index), index);
        index = this.parent(index);
    }
};

// O(1)
MinHeap.prototype.swapIndexes = function(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
};

// O(1)
MinHeap.prototype.parent = function(index) {
    return Math.floor(index/2);
};

// O(1)
MinHeap.prototype.left = function(index) {
    return (index << 1) + 1;
};

// O(1)
MinHeap.prototype.right = function(index) {
    return (index << 1) + 2;
};
