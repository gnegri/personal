import * as mh from './minHeap.js';

// fibheap would be marginally better, I think
export class PriorityQueue extends mh.MinHeap {
    constructor(array = [], labels = new Map()) {
        super(array);
        this.labels = labels; // map of <label, priority>
	}

    // adjust insert to allow labels for priority
	insert(value, label) {
		this.labels.set(label, value);
		super.insert(value);
    }

    insertUnique(value, label) {
        if (!this.hasLabel(label)) this.insert(value, label);
    }
    
    // adjust to return the label for the min as well
    extractMin() {
        let min = super.extractMin();
        let minLabel = this.findLabelByPriority(min);
        this.labels.delete(minLabel);
        return [min, minLabel];
    }

    // 
    updatePriority(label, newPriority) {
        super.remove(this.labels.get(label));
        this.labels.delete(label);
        this.insert(newPriority, label);
    }

    // 
    findLabelByPriority(priority) {
        for (let label of this.labels.keys()) {
            if (this.labels.get(label) === priority) {
                return label;
            }
        }
    }

    // 
    hasLabel(label) {
        for (let key of this.labels.keys()) {
            if (key === label) {
                return true;
            }
        }
    }
}
