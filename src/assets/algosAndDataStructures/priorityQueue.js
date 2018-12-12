import * as mh from './minHeap.js';

export class PriorityQueue extends mh.MinHeap {
    constructor(array = [], labels = new Map()) {
        super(array);
        this.labels = labels; // map of <label, priority>
	}

    // adjust insert to allow labels for priority
	insert(value, label) {
		this.labels.set(value, label);
		super.insert(value);
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

    findLabelByPriority(priority) {
        for (let label of this.labels.getKeys()) {
            if (this.labels.get(label) === priority) {
                return label;
            }
        }
    }
}
