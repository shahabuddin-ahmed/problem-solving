class Solution {
	/**
	 * Reverses the passed singly linked list.
	 *
	 * @param {ListNode} head Head ListNode of the list.
	 * @return {ListNode} Head ListNode of the reversed list.
	 */
	reverseList(head) {
		let newList = null, current = head, temp;

		while (current) {
			temp = current.next;
			current.next = newList;
			newList = current;
			current = temp;
		}

		return newList;
	}
}
  
module.exports = Solution;