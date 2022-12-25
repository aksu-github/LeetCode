/*
Instruction:

Given the root of a binary tree, return the postorder traversal of its nodes' values.

*/

//  My Solution 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if ( !root ){
      return [];
  }

  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
};

//  LeetCode - Fastest Runtime

var postorderTraversal = function(root) {
  const ans = [];
  postorder(root);
  return ans;
  
  
  function postorder(root) {
      if(root === null) {
          return;
      }
      postorder(root.left);
      postorder(root.right);
      ans.push(root.val);
  }
};

//  LeetCode - Lowest Memory Usage

var postorderTraversal = function(root) {
  if (!root) return []
  let stack = [root]
  let result = []
  while (stack.length) {
      let node = stack.pop()
      if (node.left !== null) stack.push(node.left)
      if (node.right !== null) stack.push(node.right)
      
      result.push(node.val)
  }
  return result.reverse()
};