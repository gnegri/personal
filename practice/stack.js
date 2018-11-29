class stackNode {
    data;
    next;
}

class Stack {
    topNode;

    constructor() {
        topNode = new stackNode();
    }

    isEmpty() {
        return (topNode === null);
    }

    peek() {
        return topNode;
    }

    pop() {
        if (!isEmpty()) {
            topNode = topNode.next;
        }
        return peek();
    }

    push(node) {
        if (!isEmpty()) {
            node.next = topNode;
        }
        topNode = node;
    }
}

