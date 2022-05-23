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
 var deleteDuplicates = function(head) {
    if (!head || !head.next) {
		return head;
	}
	
    let previous = head, current = head.next;

	while (current) {
		if (previous.val === current.val) {
			previous.next = current.next;
			current = current.next;
		} else {
			previous = previous.next;
			current = current.next;
		}
	}
    
    return head;
};