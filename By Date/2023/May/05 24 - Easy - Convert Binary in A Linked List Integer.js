/*
Instruction:

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

*/ 

/*  
*/

//  My Solution - Fastest Runtime

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let res = '',
        node = head;
    
    while ( node ){
        res += node.val;
        node = node.next;
    }
    return parseInt(res, 2);
};

//  LeetCode - Lowest Memory Usage

const getDecimalValue = function (head) {
    let decimalValue = 0;
  
    while (head) {
      decimalValue = (decimalValue << 1) | head.val;
      head = head.next;
    }
  
    return decimalValue;
  };