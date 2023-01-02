/*
Instruction:

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

*/

/*  Practiced on 12/7
    Redid Fastest Runtime
*/

//  My Solution 

/*
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



//  LeetCode - Lowest Memory

var isSymmetric = function(root) {
    if(root == null) return true
    return dfs(root.left, root.right);
  };
  
  function dfs(x, y){
    if( x == null && y == null) return true;
    if( x== null ||  y == null) return false;
    if(x.val !== y.val) return false;
    
    return dfs(x.left, y.right) && dfs(x.right, y.left)
  }

//  LeetCode - Fastest Runtime

var isSymmetric = function(root) {
    
    function chk(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        
        let eq1 = chk(left.left, right.right),
            eq2 = chk(left.right, right.left);
        
        return left.val === right.val && eq1 && eq2;
    }
    
    return chk(root, root);
    
};


