/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const arr = [];
    let current = head;

    while (current) {
        arr.push(current.val);
        current = current.next;
    }

    const len = arr.length;

    for (let i = 0, j = len - 1; i <= j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }

    return true;
};

// Another solutions.

var isPalindrome = function (head) {
    if (!head || !head.next) {
        return true;
    }

    let slow = head,
        fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    let first = head,
        second = prev;
    while (second) {
        if (first.val !== second.val) {
            return false;
        }
        first = first.next;
        second = second.next;
    }

    return true;
};