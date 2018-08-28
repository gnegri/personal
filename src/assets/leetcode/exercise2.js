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
var addTwoNumbers = function(l1, l2) {
    var answer = [];
    
    addTwoNumbersHelper(l1, l2, 0, answer)
    
    return answer;
};

var addTwoNumbersHelper = function(l1, l2, overflow, answer) {
    var v1;
    var v2;
    if (l1 == null) {
        v1 = 0;
    } else {
        v1 = l1.val;
        l1 = l1.next;
    }
    if (l2 == null) {
        v2 = 0;
    } else {
        v2 = l2.val;
        l2 = l2.next;
    }
    
    var out = v1 + v2 + overflow;
    if (out >= 10) {
        overflow = out/10 | 0;
        out = out % 10;
    } else {
        overflow = 0;
    }
    answer.push(out);
    
    if (l1 != null || l2 != null || overflow >= 1) {
        addTwoNumbersHelper(l1, l2, overflow, answer)
    }
    
    return;
}