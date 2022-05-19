/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 function hasCycle(head) {
    const flag = new Map();
	let current = head;

	while (current) {
		const isVisited = flag.get(current.val);
		if (!isVisited) {
			flag.set(current.val, current.val);
		} else {
			if (flag.get(current.next.val)) {
				return true;
			}
		}
		current = current.next;
	}

	return false;
};

// may be not optimized solutions

// let tortoise = hare = head
//       while (hare && hare.next) {
//         tortoise = tortoise.next
//         hare = hare.next.next
//         if (tortoise === hare) {
//           return true
//         }
//       }
//       return false