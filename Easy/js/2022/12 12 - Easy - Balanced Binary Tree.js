/*
Instruction:

Given a binary tree, determine if it is height-balanced.

*/

/*  Practiced on 12/14
    My Solution
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

//  LeetCode - Fastest Runtime

var isBalanced = function(root) {
    return checkBalanced(root) !== -1;
};

var checkBalanced = function(root) {
    if (root === null) return 0;
    
    let left = checkBalanced(root.left);
    if (left === -1) return -1;
    let right = checkBalanced(root.right);
    if (right === -1) return -1;
    
    if (Math.abs(left - right) > 1) return -1;
        
    return 1 + Math.max(left, right);
}

//  LeetCode - Lowest Memory Usage

var isBalanced = function(root) {
    return dfs(root)==Infinity?false:true;
};



const dfs = (node) => {
    if(!node){
       return 0
    }
    
    const left = 1 + dfs(node.left)
    const right = 1 + dfs(node.right)
    
    if(Math.abs(left - right) > 1){
       return Infinity
    }
    
    return Math.max(left, right)
}