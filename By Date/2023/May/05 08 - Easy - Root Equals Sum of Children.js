/*
Instruction:

You are given the root of a binary tree that consists of exactly 3 nodes: 
the root, its left child, and its right child.

Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

*/ 

/*  
*/

//  My Solution - Fastest Runtime + Lowest Memory Usage

/*
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) {
    return root.left.val + root.right.val == root.val;
};