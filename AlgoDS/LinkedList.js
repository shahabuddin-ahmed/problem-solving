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
				return current.node;
			}
			mid++;
			current = current.next;
		}
	}

	deleteAtIndex(n) {
		let current = this.head, counter = 0;
		if (n === 0 && this.head) {
			return this.head = this.head.next;
		}

		while (current) {
			counter += 1;
			if (counter === n && current.next) {
				current.next = current.next.next;
			}
			current = current.next;
		}
		return this.head;
	}

	recursivelyDeleteAtIndex(n) {
		if (this.head === null) {
			return null;
		} else if (n === 0) {
			return this.head.next;
		}
		this.head = this.head.next;
		return this.recursivelyDeleteAtIndex(n - 1);
	}

	removeDuplicates() {
		const uniqueVal = new Set();
		let current = this.head;

		while (current) {
			uniqueVal.add(current.node);
			current = current.next;
		}

		const uniqueArr = [...uniqueVal];
		this.head = null;

		uniqueArr.forEach(value => {
			const newNode = new Node(value);
			if (!this.head) {
				this.head = newNode;
			} else {
				let current = this.head;
				while (current.next) {
					current = current.next;
				}
				current.next = newNode;
			}
		});
		return this.head;
	}
}

const LL = new LinkedList();
LL.addNode(12);
LL.addNode(14);
LL.addNode(16);
LL.addNode(18);
LL.addNode(20);
LL.listNode();
console.log("After adding some data\n");
LL.insertNodeFront(10);
LL.addNode(22);
LL.listNode();
console.log("After adding head and tail data\n");
LL.deleteTailNode();
LL.listNode();
console.log("After deleting tail data\n");
LL.deleteHeadNode();
LL.listNode();
console.log("After deleting head data\n");
console.log("middle =>", LL.findMiddle());
LL.deleteAtIndex(3);
LL.listNode();
console.log("After delting Nth data\n");
LL.recursivelyDeleteAtIndex(2);
LL.listNode();
console.log("After recursively delting Nth data\n");
LL.addNode(20);
LL.addNode(22);
LL.listNode();
console.log("After adding some data\n");
LL.removeDuplicates();
console.log("Unique Value of Node\n");