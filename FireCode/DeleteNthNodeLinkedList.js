function deleteAtIndex(head, n) {
    let current = head, counter = 0;
	if (n === 0 && head.next) {
		return head = head.next;
	}

	while (current) {
		counter += 1;
		if (counter === n && current.next) {
			current.next = current.next.next;
		}
		current = current.next;
	}
	return head;
}

const result = deleteAtIndex([1,2,3,4,5], 3);