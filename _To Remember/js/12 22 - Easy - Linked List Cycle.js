/*
Instruction:

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the 
list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer 
is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

*/

/*  Practiced on 12/30
    Fastest Runtime + Lowest Memory Usage
*/

//  My Solution 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let node1 = head,
        node2 = head;

    while ( node2 && node2.next && node2.next.next ){
        node1 = node1.next;
        node2 = node2.next.next;

        if ( node1 == node2 ){
            return 1;
        }
    }

    return 0;
    
};

//  LeetCode - Fastest Runtime + Lowest Memory Usage

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast&&fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast==slow){
            return true;
        }
    }
    return false;
};

