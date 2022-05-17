const ListNode = require("./ListNode");
function removeDuplicates(head) {
    const uniqueVal = new Set();
	let current = head;

	while (current) {
		uniqueVal.add(current.data);
		current = current.next;
	}

	const uniqueArr = [...uniqueVal];
	head = null;

	uniqueArr.forEach(value => {
		const newNode = new Node(value);
		if (!head) {
			head = newNode;
		} else {
			let current = head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
	});
	return head;
}