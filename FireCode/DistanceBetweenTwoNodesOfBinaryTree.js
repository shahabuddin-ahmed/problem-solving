class Solution {
    /**
     * Returns the distance between two tree nodes with
     * data values equal to n1 and n2.
     *
     * @param {TreeNode} root Root TreeNode of the binary tree.
     * @param {number} n1 First target node's data value.
     * @param {number} n2 Second target node's data value.
     * @return {number} Distance between the two nodes.
     */
    distance(root, n1, n2) {
        const lcaHolder = [];
        this.getLca(root, n1, n2, lcaHolder);
        return (
            this.rootDistance(root, n1, 0) +
            this.rootDistance(root, n2, 0) -
            2 * this.rootDistance(root, lcaHolder[0].data, 0)
        );
    }

    /**
     * Helper function that returns the distance of the
     * root of the tree from the node with data = n.
     * @param {TreeNode} node
     * @param {number} n
     * @param {number} stepsSoFar
     * @return {number}
     */
    rootDistance(node, n, stepsSoFar) {
        if (node === null) return -1;
        else if (node.data === n) return stepsSoFar;
        else
            return Math.max(
                this.rootDistance(node.left, n, stepsSoFar + 1),
                this.rootDistance(node.right, n, stepsSoFar + 1)
            );
    }

    /**
     * Helper method that populates the placeholder array with the
     * LCA node, given the root of the tree and the two target
     * node's integer data values.
     * @param {TreeNode} node
     * @param {number} n1
     * @param {number} n2
     * @param {Array<TreeNode>} lcaContainer
     * @return {boolean}
     */
    getLca(node, n1, n2, lcaContainer) {
        if (node === null) return false;
        else {
            const left = this.getLca(node.left, n1, n2, lcaContainer);
            const right = this.getLca(node.right, n1, n2, lcaContainer);
            const mid = node.data === n1 || node.data === n2;
            if ((left && right) || (left && mid) || (right && mid))
                lcaContainer[0] = node;
            return left || mid || right;
        }
    }
}

module.exports = Solution;
