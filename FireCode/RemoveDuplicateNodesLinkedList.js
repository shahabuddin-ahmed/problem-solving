class Solution {
	/**
	 * Removes duplicates from the passed linked list and
	 * returns the head of the modified list.
	 *
	 * @param {ListNode} head Head of the singly linked list.
	 * @return {ListNode} Head ListNode of the modified linked list.
	 */
	removeDuplicates(head) {
		if (!head) {
			return head;
		}
		const checkDuplicate = new Map();
		let current = head.next, previous = head;
		checkDuplicate.set(previous.data, 1);

		while (current) {
			if (checkDuplicate.get(current.data)) {
				previous.next = previous.next.next;
				current = current.next;
			} else {
				checkDuplicate.set(current.data, 1);
				previous = previous.next;
				current = current.next;
			}
		}
		
		return head;
	}
}

module.exports = Solution;