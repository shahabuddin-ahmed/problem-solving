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
			// console.log(current.node);
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
		// console.log(this.head);
		return this.head;

		// may be also optimized
	}

	deleteHeadNode() {
		let current = this.head;
		if (!current || !current.next) {
			return null;
		}
		current = current.next;
		this.head = current;
		// console.log(this.head);
		return this.head;

		// this is optimal solution
		// if (head == null) {
		// 	return null;
		//   }
		//   return head.next;
	}

	findMiddle() {
		let count = 0;
		let mid = 1;
		let current = this.head;

		while (current) {
			current = current.next;
			count++;
		}

		if (count % 2 === 0) {
			count = count / 2 + 1;
		} else {
			count = Math.ceil(count / 2);
		}

		current = this.head;
		while (current) {
			if (mid === count) {
				console.log(mid);
				return current.node;
			}
			mid++;
			current = current.next;
		}
	}
}

const LL = new LinkedList();
LL.addNode(1);
LL.addNode(2);
LL.addNode(3);
LL.addNode(4);
LL.addNode(5);
LL.listNode();
LL.insertNodeFront(10);
LL.listNode();
LL.deleteTailNode();
LL.listNode();
LL.deleteHeadNode();
LL.listNode();
console.log(LL.findMiddle())