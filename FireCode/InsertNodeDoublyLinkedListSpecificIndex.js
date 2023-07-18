const DoubleLinkListNode = require("./DoubleLinkListNode");

class Solution {
    /**
     * Inserts a new DoubleLinkListNode with data n at the specified i and
     * returns the head of the modified list.
     *
     * @param {DoubleLinkListNode} head Head of the doubly linked list.
     * @param {number} n Integer to set on the data property of the inserted node.
     * @param {number} i Zero indexed integer position to insert the new node.
     * @return {DoubleLinkListNode} Head DoubleLinkListNode of the modified doubly linked list.
     */
    insertAtIndex(head, n, i) {
        const sentinelNode = new DoubleLinkListNode(
            Number.NEGATIVE_INFINITY,
            null,
            head
        );
        let previous = sentinelNode;
        while (--i >= 0 && previous.next !== null) {
            previous = previous.next;
        }
        const newNode = new DoubleLinkListNode(n, previous, previous.next);
        previous.next = newNode;
        if (newNode.next !== null) {
            newNode.next.previous = newNode;
        }
        return sentinelNode.next;
    }
}

module.exports = Solution;
