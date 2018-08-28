/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var thisNode = head;
    // var index = 0;

    // var map = new Map();
    // map.set(0, thisNode);

    var map = [thisNode];

    while (thisNode.next != null) {
        // index++;
        thisNode = thisNode.next;
        // map.set(index, thisNode);
        map.push(thisNode);
    }

    var index = map.length - 1;
    if (index >= n) {
        // var modifyNode = map.get(index - n);
        // var nextNode = map.get(index - n + 2);
        var modifyNode = map[index - n];
        var nextNode = map[index - n + 2];
        modifyNode.next = nextNode;
        // modifyNode.next = modifyNode.next.next;
    } else {
        head = head.next;
    }

    return head;
};