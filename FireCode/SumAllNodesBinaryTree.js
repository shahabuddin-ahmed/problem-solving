function sumNodes(root) {
    if (!root) {
      return 0;
    }
    return root.data + this.sumNodes(root.left) + this.sumNodes(root.right);
}

/**
 * top solutions
 * 
 * sumNodes(root) {
    if (root === null) return 0;
    else return root.data + this.sumNodes(root.left) + this.sumNodes(root.right);
  }
 */