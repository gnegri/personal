/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var node = new ListNode();
    var ans = node;
    while (l1 !== null || l2 !== null) {
        var cur = new ListNode();
        if (l1 === null) {
            cur.val = l2.val;
            l2 = l2.next;
        } else if (l2 === null) {
            cur.val = l1.val;
            l1 = l1.next;
        } else if (l1.val < l2.val) {
            cur.val = l1.val;
            l1 = l1.next;
        } else {
            cur.val = l2.val;
            l2 = l2.next;
        }
        node.next = cur;
        node = cur;
    }

    return ans.next;
};