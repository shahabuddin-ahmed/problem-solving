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
var swapPairs = function (head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let tail = dummy,
        first = head;

    while (first && first.next) {
        let second = first.next;

        tail.next = second;
        first.next = second.next;
        second.next = first;

        tail = first;
        first = first.next;
    }

    return dummy.next;
};
