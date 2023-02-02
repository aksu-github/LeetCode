/*
Instruction:

iven the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val == val, 
and return the new head.

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if ( !head ){
      return head;
  }
  while ( head ){
      if ( head.val == val ){
          head = head.next;
      } else {
          break;
      }
  }
  
  let cur = head;

  while ( cur && cur.next ){
      if ( cur.next.val == val ){
          cur.next = cur.next.next;
      } else {
          cur = cur.next;
      }
  }
  return head;
};

//  LeetCode - Fastest Runtime

var removeElements = function(head, val) {
  if (head == null) return head;

  if (head.val == val) {
      return removeElements(head.next, val);
  } else {
      head.next = removeElements(head.next, val)
      return head
  }

};