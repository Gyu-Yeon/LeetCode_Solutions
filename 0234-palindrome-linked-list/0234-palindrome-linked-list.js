/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr =[];
    let next = head
    while (next) {
        arr.push(next.val);
        next = next.next
    }
    let reversed = arr.reverse();
    
    let next2 = head;
    
    let counter = 0;
    while (counter < reversed.length) {        
        if (next2.val !== reversed[counter]) {
            return false
        } else {
            counter++
            next2 = next2.next
        }
    }
    return true
};