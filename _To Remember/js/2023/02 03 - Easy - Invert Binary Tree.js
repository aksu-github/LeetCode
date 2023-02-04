/*
Instruction:

Given the root of a binary tree, invert the tree, and return its root.

*/

/*  
*/


//  My Solution - Lowest Memory Usage

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if ( !root ){
        return null;
    }    
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);



    return root;
};

//  LeetCode - Fastest Runtime

//  I tried to do this

var invertTree = function(root) {
    if(root === null) {
        return null;
    }
    let node = new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
    return node;
};