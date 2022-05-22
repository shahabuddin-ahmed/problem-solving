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
 var isPalindrome = function(head) {
    const arr = [];
    let current = head;

    while (current) {
        arr.push(current.val);
        current = current.next;
    }

    const len = arr.length;

    for (let i = 0, j = len -1; i <= j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }

    return true;
};