/*
Instruction:

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

*/

/*  Practiced on 12/6
    Redid Iterative Method
*/

//  My Solution 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
  if ( !p && !q ){
      return 1;
  }

  if ( !p && q ){
      return 0;
  } else if ( p && !q ){
      return 0;
  } else {
      if ( p.val == q.val && isSameTree(p.left, q.left) == 1 && isSameTree(p.right, q.right)== 1 ){
          return 1;
      } else {
          return 0;
      }
  }
};


//  LeetCode - Fastest Runtime && Least Memory Usage

var isSameTree = function(p, q) {
  //if they both don't exist return true
  if (!p && !q) return true

  //if there is either p or q but not the other, return false
  if (!p || !q) return false

  //if they two current nodes are unequal, return false
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};



