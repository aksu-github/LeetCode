/*
Instruction:

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]

*/ 

/*  
*/

//  LeetCode - Double Pointer for 1 Loop + Relatively Low Memory Usage

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if ( !head ){
        return [];
    }

    let fast = head,
        slow = head;
    
    for ( let i = 0; i < n; i++){
        fast = fast.next;
    }
    if ( !fast ){
        return head.next;
    }
    while ( fast.next ){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};

//  LeetCode - Interesting Coding + Fast Runtime

var removeNthFromEnd = function(head, n) {
    let s = head;
    let f = head;

    while (f && n !== 0) {
        --n;
        f = f.next;
    }

    if (!f) {
        return head.next;
    }

    while (f.next) {
        s = s.next;
        f = f.next;
    }

    s.next = s.next.next;

    return head;
};