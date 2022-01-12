function recursivelyDeleteAtIndex(n) {
	if (head === null) {
		return null;
	} else if (n === 0) {
		return head.next;
	}

	head.next = this.deleteAtIndex(head.next, n - 1);
	return head;
}

const result = recursivelyDeleteAtIndex(3);
console.log(result);