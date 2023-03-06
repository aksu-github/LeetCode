/*
Instruction:

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

*/ 

/*  
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
var sumOfLeftLeaves = function(root) {
    let res = 0;
    if ( !root ){
        return res;
    }

    let helper = (node, left = false ) => {
        if ( !node ){
            return;
        }
        if ( !node.left && !node.right && left ){
            res+=node.val;
        }
        helper(node.left, true);
        helper(node.right, false);
    }

    helper(root);
    return res;
};

//	LeetCode - Fastest Runtime

var sumOfLeftLeaves = function(root) {
    var ans = 0;
    var f = function(node , check) {
        if(!node.left && !node.right && check){
            ans += node.val; 
        }
        if(node.left) f(node.left, true)
        if(node.right) f(node.right, false)
    };
    f(root, false);
    return ans;
};