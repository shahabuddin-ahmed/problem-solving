const ListNode = require("./ListNode");

class Solution {
	/**
	 * Recursively deletes the node at the nth index of the input linked
	 * list. If n is out of bounds, returns the list without
	 * modification.
	 *
	 * @param {ListNode} head Head of the singly linked list.
	 * @param {number} n Index (zero-indexed) of the node to be deleted.
	 * @return {ListNode} Head ListNode of the modified linked list.
	 */
	deleteAtIndex(head, n) {
		if (head === null) {
			return null;
		} else if (n === 0) {
			return head.next;
		}

		head.next = this.deleteAtIndex(head.next, n - 1);
		return head;
	}
}

module.exports = Solution;