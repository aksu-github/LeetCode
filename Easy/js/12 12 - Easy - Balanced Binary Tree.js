/*
Instruction:

Given a binary tree, determine if it is height-balanced
.

*/


//  My Solution 

//  Sort of semi-hard. Had to think thru a lot even though I already knew how to do a depth checker.

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
 * @return {boolean}
 */
var isBalanced = function(root) {

    let checker = function( node ){
        if ( node === null ){
            return 0;
        }
        return 1 + Math.max( checker( node.left ), checker( node.right ) );
    }

    if ( root === null ){
        return 1;
    }
    return  Math.abs( checker( root.left ) - checker( root.right ) ) <= 1 &&
            isBalanced( root.left ) && 
            isBalanced( root.right );
};