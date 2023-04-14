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
var deleteDuplicates = function(head) {
    //prev == head
    //current == head.next
    // compare prev & current
    // if (prev !== current) prev == current, current = current.next
    // if (prev === current) prev.next = current.next current = current.next
    //while (!head.next) run loop
        let prev = head;
        let current = head?.next;
    while (current) {
        if (prev.val !== current.val) {
            prev = current;
            current = current.next;
        } else if (prev.val === current.val) {
            prev.next = current.next;
            current = current.next;
            }
    }
    return head
};