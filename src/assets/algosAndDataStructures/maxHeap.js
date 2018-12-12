// this defines a max heap

// constructor
function MaxHeap(array = []) {
    this.heap = [...array];
    this.heapSize = array.length;
    this.buildMaxHeap();
};


// O(n logn)
MaxHeap.prototype.buildMaxHeap = function() {    
    if (this.heapSize > 0) {
        for (let index = Math.floor(this.heapSize/2); index >= 0; index--) {
            this.maxHeapify(index);
        }
    }
};

// O(logn)
MaxHeap.prototype.maxHeapify = function(index) {
    const left = this.left(index);
    const right = this.right(index);
    
    let maxIndex = index;
    if (left < this.heapSize && this.heap[left] > this.heap[maxIndex]) {
        maxIndex = left;
    }
    
    if (right < this.heapSize && this.heap[right] > this.heap[maxIndex]) {
        maxIndex = right;
    }
    
    if (maxIndex !== index) {
        this.swapIndexes(maxIndex, index);
        this.maxHeapify(maxIndex);
    }
};

// O(1)
MaxHeap.prototype.getMax = function() {
    return this.heap[0];
};

// O(logn)
MaxHeap.prototype.extractMax = function() {
    if (this.heapSize === 0) return null;
    const max = this.getMax();
    this.heap[0] = this.heap[--this.heapSize];
    this.maxHeapify(0); // here's where the work is done
    return max;
};

// O(logn)
MaxHeap.prototype.insert = function(value) {
    value = Math.max(value, Number.NEGATIVE_INFINITY);
    const tmp = this.heapSize;
    this.heap[tmp] = Number.NEGATIVE_INFINITY;
    this.incKey(tmp, value); // here's where the work is done
    this.heapSize++;
};

// O(logn)
MaxHeap.prototype.incKey = function(index, value) {
    this.heap[index] = value;
    while (index >= 0 && this.heap[this.parent(index)] < this.heap[index]) {
        this.swapIndexes(this.parent(index), index);
        index = this.parent(index);
    }
};

// O(1)
MaxHeap.prototype.swapIndexes = function(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
};

// O(1)
MaxHeap.prototype.parent = function(index) {
    return Math.floor(index/2);
};

// O(1)
MaxHeap.prototype.left = function(index) {
    return (index << 1) + 1;
};

// O(1)
MaxHeap.prototype.right = function(index) {
    return (index << 1) + 2;
};

// in place sort with copyback
// O(logn)
MaxHeap.prototype.sort = function() {
    let [tmpHeapSize, tmpHeap] = [this.heapSize, [...this.heap]];
    for (let i = this.heapSize - 1; i >= 0; i--) {
        this.swapIndexes(0, i);
        this.heapSize--;
        this.maxHeapify(0);
    }
    
    const ret = this.heap; //.slice(1, this.heap.length);
    [this.heapSize, this.heap] = [tmpHeapSize, [...tmpHeap]];
    return ret;
};

// O(logn)
let heapsort = (array) => {
    let heap = new MaxHeap(array);
    return heap.sort();
};