/*
Instruction:

Given the root of a binary tree and an integer targetSum, 
return true if the tree has a root-to-leaf path such that 
adding up all the values along the path equals targetSum.

A leaf is a node with no children.

*/

/*  Practiced on 12/16
    Fastest Runtime Solution
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
/*
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if ( root === null ){
        return 0;
    }

    let checker = function ( node, n ){
        if ( node.left == null && node.right == null){
            return n == targetSum;
        }
        return hasPathSum( node.left, targetSum - node.val ) || hasPathSum( node.right, targetSum - node.val);
    }

    return checker( root, root.val );
};

//  LeetCode - Fastest Runtime

var hasPathSum = function(root, targetSum) {
    if ( root === null ){
        return 0;
    }

    if ( root.left == null && root.right == null){
        return root.val == targetSum;
    }
    
    return hasPathSum( root.left, targetSum - root.val ) || hasPathSum( root.right, targetSum - root.val);
};

//  LeetCode - Lowest Memory Usage

var hasPathSum = function(root, targetSum) {
    if (root == null) {
        return false;
    }
    if (targetSum == root.val && root.left==null && root.right == null) {
        return true;
    }
    if (hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum-root.val))      {
        return true;
     };
    return false;
    
};