/*
Instruction:

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along 
the shortest path from the root node down to the nearest leaf node.

*/

/*  Practiced on 12/14
    My Solution
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
var minDepth = function(root) {
    if ( root === null ){
        return 0;
    }

    if ( root.left == null ){
        return minDepth( root.right ) + 1;
    }
    if ( root.right == null ){
        return minDepth( root.left ) + 1;
    }
    return 1 + Math.min(minDepth( root.left ), minDepth( root.right ));
}