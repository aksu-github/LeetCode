/*
Instruction:

Given the root of a binary tree, return the inorder traversal of its nodes' values.

*/

//  My Solution 



//  LeetCode - Recursive (Simple, but resource and time intensive)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 // Not the way I would of gone about it
 var inorderTraversal = function(root) {
    if ( !root ){
        return [];
    }

    return [ ...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};

//  LeetCode - Iterative (Fastest Runtime)

//  My thought process was to use a while loop somehow

function inorderTraversal(root) {
  let stack = [];
  let res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}