function deleteNodeTail() {
	let current = this.head;
	if (!current || !current.next) {
		return null;
	}
	while (current.next.next) {
		current = current.next;
	}
	current.next = null;
	console.log(this.head);
	return this.head;
}