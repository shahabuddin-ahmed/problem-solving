/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) {
        return;
    }

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = reverseList(slow.next);
    slow.next = null;

    let firstHalf = head;

    while (secondHalf) {
        let firstNext = firstHalf.next;
        let secondNext = secondHalf.next;

        firstHalf.next = secondHalf;
        secondHalf.next = firstNext;

        firstHalf = firstNext;
        secondHalf = secondNext;
    }
};

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}
