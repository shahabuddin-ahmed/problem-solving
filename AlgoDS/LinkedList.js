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

	insertNodeFront(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
	}

	deleteTailNode() {
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

	deleteHeadNode() {
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
}

const LL = new LinkedList();
LL.addNode(12);
LL.addNode(14);
LL.addNode(16);
LL.addNode(18);
LL.listNode();
LL.insertNodeFront(10);
LL.listNode();
LL.deleteTailNode();
LL.deleteHeadNode();