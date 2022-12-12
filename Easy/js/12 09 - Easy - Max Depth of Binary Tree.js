/*
Instruction:

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the 
longest path from the root node down to the farthest leaf node.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

*/

/*  Practiced on 12/11
    
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
 * @return {number}
 */
var maxDepth = function(root) {
    function checker( root , n ){
        if ( !root ){
            return n;
        }
        return Math.max( checker( root.left, n+1 ), checker( root.right, n+1) )
    }

    return checker( root, 0 );
};

//  LeetCode - Fastest Runtime

var maxDepth = function(root) {
    if(!root) {
        return 0;
    }else{
        let lDepth=maxDepth(root.left)
        let rDepth=maxDepth(root.right)

        return 1 + Math.max(rDepth,lDepth)
    } 
};

//  LeetCode - Lowest Memory Usage

var maxDepth = function(root){
    if ( !root ){
        return 0;
    }

    return 1 + Math.max( maxDepth(root.left), maxDepth(root.right) );
}