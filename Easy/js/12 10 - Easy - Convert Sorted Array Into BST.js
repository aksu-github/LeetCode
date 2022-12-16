/*
Instruction:

Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.

*/

/*  Practiced on 12/11
    
*/

/*  Practiced on 12/14
    Codewars Lowest Memory Usage
*/
//  My Solution 

//  Yeah, no. This did not feel easy. I just brute forced this one.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if ( nums.length == 0 ){
        return null;
    }
    if ( nums.length == 1 ){
        return new TreeNode(nums[0]);
    }

    let midIndex = Math.floor( nums.length / 2 );
    let root = new TreeNode( nums[midIndex] );

    let left = nums.slice(0, midIndex );
    root.left = sortedArrayToBST( left );

    let right = nums.slice( midIndex + 1, nums.length );
    root.right = sortedArrayToBST( right );

    return root;
}


//  LeetCode - Fastest Runtime

var sortedArrayToBST = function(nums) {
    return buildBst(nums, 0, nums.length - 1);
  };
  
  function buildBst(nums, left, right) {
    if(left > right) return null;
  
    const mid = Math.floor((left + right) / 2);
    const currentNode = new TreeNode(nums[mid]);
    currentNode.left = buildBst(nums, left, mid - 1);
    currentNode.right = buildBst(nums, mid + 1, right);
  
    return currentNode;
  }


//  LeetCode - Least Memory Usage

var sortedArrayToBST = function (nums) {
    if (!nums.length) return null;

    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;

};