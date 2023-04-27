/*
Instruction:

Given the root node of a binary search tree and two integers low and high, 
return the sum of values of all nodes with a value in the inclusive range [low, high].

 

Example 1:


Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32

Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

*/ 

/*  
*/


//  My Solution - Fastest Runtime

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let res = 0;
    helper(root);
    return res;

    function helper(node){
      if ( !node ){
        return;
      }
      if (node.val < low){
        helper(node.right);
        return;
      }
      if ( node.val > high){
        helper(node.left);
        return;
      }
      res+=node.val;
      helper(node.right);
      helper(node.left);
    }
};

//  LeetCode - Another 1 of Fastest Runtime, but similar to my train of thought

var rangeSumBST = function(root, low, high) {
    let res = 0;
    if ( !root ){
        return res;
    }
    if ( root.val > low ){
        res += rangeSumBST(root.left, low, high);
    }
    if ( root.val >= low && root.val <= high ){
        res+=root.val;
    }
    if ( root.val < high ){
        res += rangeSumBST(root.right, low, high);
    }
    return res;

};

//  LeetCode - Another 1 of Fastest Runtime

var rangeSumBST = function(root, low, high) {
    if (!root) return 0; 

    const val = (root.val >= low && root.val <= high) ? root.val : 0;
    return rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high) + val;

};

