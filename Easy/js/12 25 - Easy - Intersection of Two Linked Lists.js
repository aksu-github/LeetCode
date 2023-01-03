/*
Instruction:

Given the heads of two singly linked-lists headA and headB, 
return the node at which the two lists intersect. 

If the two linked lists have no intersection at all, return null.

*/

//  My Solution - Fastest Runtime + Lowest Memory Usage

/*  Practiced on 1/2
    Traced by hand to understand what is going on
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if ( !headA || !headB ){
      return 0;
  }

  let pA = headA,
      pB = headB;

  while ( pA != pB ){
      pA = !pA ? headB : pA.next;
      pB = !pB ? headA : pB.next;
  }

  return pA;
};