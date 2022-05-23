/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let previous = null, current = head, temp = null;
    while (current) {
        temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }

    head = previous;
    return head;
};