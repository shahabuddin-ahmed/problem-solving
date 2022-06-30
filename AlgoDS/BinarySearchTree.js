class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		const newNode = new Node(data);

		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(root, newNode) {
		if (root.data > newNode.data) {
			if (root.left === null) {
				root.left = newNode;
			} else {
				this.insertNode(root.left, newNode);
			}
		} else {
			if (root.right === null) {
				root.right = newNode;
			} else {
				this.insertNode(root.right, newNode);
			}
		}
	}

	getRootNode() {
		return this.root;
	}

	// asc order for sort
	inorder(node) {
		if (node) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}

	preorder(node) {
		if(node) {
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}

	// desc order for sort
	postorder(node) {
		if(node !== null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
	}

	search(node, data) {
		if (!node) {
			return false;
		}

		if (node.data > data) {
			return this.search(node.left, data);
		} else if (node.data < data) {
			return this.search(node.right, data);
		} else {
			return true;
		}
	}

	remove(node, data) {
		


	}

	removeNode(node, data) {
		if (!node) {
			return null;
		}
		
		if (node.data > data) {
			return this.removeNode(node.left, data);
		} else if (node.data < data) {
			return this.removeNode(node.right, data);
		} else {
			node.data = null;
		}
	}
}


const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

const node = BST.getRootNode();
BST.inorder(node);
BST.preorder(node);
BST.postorder(node);
const searchResult = BST.search(node, 22);
console.log(searchResult);
