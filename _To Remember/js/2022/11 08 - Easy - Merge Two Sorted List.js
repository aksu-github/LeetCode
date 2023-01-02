/*
Instruction:

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

*/

/*  Practiced on 11/30
    Re-Did Using Iterative - Faster Runtime

    Re-did Leetcode - Lowest Runtime
*/

//  My Solution 

//  Leetcode - Iterative (Faster Run Time)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 @param {ListNode} list1
 @param {ListNode} list2
  @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  //  Create Head
  const head = new ListNode();
  let node = head;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      node.next = list2;
      list2 = list2.next;
    } else {
      node.next = list1;
      list1 = list1.next;
    }
    node = node.next;
  }
  node.next = list1 || list2;
  return head.next;
};

//  Leetcode - Recursive (High Memory Usage)

var mergeTwoLists = function(l1, l2) {
  if(!l1 || !l2) {
    return l1? l1 : l2;
  }
  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};