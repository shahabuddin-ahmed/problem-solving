/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let counter = 0, current = head;
    
    while (current) {
        counter++;
        current = current.next;
    }

    counter = Math.floor(counter / 2);
    current = head;

    while (counter--) {
        current = current.next;
    }

    head = current;
    return head;
};