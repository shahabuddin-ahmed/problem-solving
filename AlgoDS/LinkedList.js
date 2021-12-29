class Node {
	constructor(data) {
		this.node = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	addNode(data) {
		const newNode = new Node(data);

		if (this.head === null) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	listNode() {
		let current = this.head;
		while (current) {
			console.log(current.node);
			current = current.next;
		}
	}
}

const LL = new LinkedList();
LL.addNode(12);
LL.addNode(14);
LL.addNode(16);
LL.addNode(18);
LL.listNode();