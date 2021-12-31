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

	insertNodeFront(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
	}
}

const LL = new LinkedList();
LL.insertNodeFront(10);