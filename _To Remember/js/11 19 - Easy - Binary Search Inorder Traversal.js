/*
Instruction:

Given the root of a binary tree, return the inorder traversal of its nodes' values.

*/

//  My Solution 

/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let total = m + n - 1;

    for ( let i = nums1.length - 1; i > 0, n > 0; i--, total--){
        if ( nums1[m-1] > nums2[n-1] ){
            nums1[i] = nums1[m-1];
            m--;
        } else {
            nums1[i] = nums2[n-1];
            n--;
        }
    }
};

//  LeetCode - Recursive (Simple, but resource and time intensive)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 // Not the way I would of gone about it
 var inorderTraversal = function(root) {
    if ( !root ){
        return [];
    }

    return [ ...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};

//  LeetCode - Iterative (Fastest Runtime)

//  My thought process was to use a while loop somehow

function inorderTraversal(root) {
  let stack = [];
  let res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}