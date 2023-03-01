/*
Instruction:

Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

/*  
*/


//  My Solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if ( !head ){
        return null;
    }

    let prev = null,
        cur = head,
        next = null;

    while ( cur ){
        //  Assign current.next as head
        next = cur.next;

        //  Move the reverse linked pointer
        cur.next = prev;

        //  Move the current instance of the pointer forward to traverse current listnode 
        prev = cur;
        cur = next;

    }
    return prev;
};