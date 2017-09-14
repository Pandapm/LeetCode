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
var addTwoNumbers = function (l1, l2) {
    let point = output = new ListNode(0);
    let carry = 0;
    while (l1 || l2 || carry) {
        l1 = l1 ? l1 : new ListNode(0);
        l2 = l2 ? l2 : new ListNode(0);
        let sum = l1.val + l2.val + carry;
        carry = sum >= 10 ? 1 : 0;
        point = point.next = new ListNode(sum % 10);
        l1 = l1.next;
        l2 = l2.next;
    }
    return output.next;

};
