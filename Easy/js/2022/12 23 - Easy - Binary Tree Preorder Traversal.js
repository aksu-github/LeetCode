/*
Instruction:

Given the root of a binary tree, return the preorder traversal of its nodes' values.

*/

/*  Practiced on 12/31
    My Solution 3
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
var preorderTraversal = function(root) {
    
    if ( !root ){
        return [];
    }

    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right) ]
};

//  My Solution 2

var preorderTraversal = function(root) {
    let stack = [];
    let res = [];
  
    while (root || stack.length) {
      if (root) {
        res.push(root.val)
        stack.push(root);
        root = root.left;
      } else {
        root = stack.pop();
        root = root.right;
      }
    }
  
    return res;
  }

//  My Solution 3

var preorderTraversal = function(root) {
  let res = [];
  preOrder(root);
  return res;

  function preOrder(node){
      if ( !node ){
          return;
      }

      res.push(node.val);
      preOrder(node.left);
      preOrder(node.right);
  }
}