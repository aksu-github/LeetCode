/*
Instruction:

Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes 
(i.e., only nodes themselves may be changed.)

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:

Input: head = []
Output: []

Example 3:

Input: head = [1]
Output: [1]

*/ 

/*  
*/

//  LeetCode - Triple Pointers + Lowest Memory Usage

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
var swapPairs = function(head) {
    if ( !head || !head.next ){
        return head;
    }
    let p1 = head,
        p2 = head.next,
        p3 = p2.next;
    
    p2.next = p1;
    p1.next = swapPairs(p3);

    return p2;
};

//  LeetCode - Fastest Runtime

var swapPairs = function(head) {
    let dummy = new ListNode();
    dummy.next = head;
    let current = dummy;
    while (current.next && current.next.next) {
        let first = current.next;
        let second = current.next.next;
        first.next = second.next;
        current.next = second;
        current.next.next = first;
        current = current.next.next;
    }
    return dummy.next;
};