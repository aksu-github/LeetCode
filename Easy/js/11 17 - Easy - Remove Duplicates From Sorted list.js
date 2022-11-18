/*
Instruction:

Given the head of a sorted linked list, 
delete all duplicates such that each element appears only once. 

Return the linked list sorted as well.

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
 var deleteDuplicates = function(head) {
    
  let temp = head;
  while ( temp ){
      if ( temp.next !== null && temp.val == temp.next.val ){
          temp.next = temp.next.next;
      } else {
          temp = temp.next;
      }
  }

  return head;
};

//  LeetCode - Fastest Runtime

var deleteDuplicates = function(head) {
  if(!head) return head
  var cur = head
  
  while(cur!=null && cur.next != null) {
      if(cur.next.val === cur.val) {
          cur.next = cur.next.next
      }else {
          cur = cur.next
      }
  }
  return head
}