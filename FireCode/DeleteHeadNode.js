function deleteHeadNode() {
	let current = this.head;
	if (!current || !current.next) {
		return null;
	}
	current = current.next;
	this.head = current;
	console.log(this.head);
	return this.head;

	// this is optimal solution
	// if (head == null) {
	// 	return null;
	//   }
	//   return head.next;
}