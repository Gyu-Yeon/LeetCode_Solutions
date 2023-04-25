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
    let nextVal = head.next
    let counter = 1;
    while (nextVal) {
        nextVal = nextVal.next
        counter++
    }
    
    let middle = Math.floor(counter / 2) 
    // console.log(middle)
    let list = head;
    while (middle !== 0) {
        list = list.next
        middle--
    }
    return list
};