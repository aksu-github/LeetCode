/*
Instruction:

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

*/

/*  
*/


//  My Solution

/*
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];

    function checker( node, str ){
        if ( !node ){
            return;
        }
        if ( !node.left && !node.right ){
            return res.push(`${str}${node.val}`)
        }
        checker( node.left, `${str}${node.val}->`);
        checker( node.right, `${str}${node.val}->`);
    }

    checker( root, '' );
    return res;
};

//  LeetCode - Fastest Runtime

var binaryTreePaths = function(root) {
    let result = [];

    const helper = (node, path) => {

      if (!node.left && !node.right) {
        result = [...result, [...path, node.val].join('->')];
      }

      if (node.left) {
        helper(node.left, [...path, node.val]);
      }

      if (node.right) {
        helper(node.right, [...path, node.val]);
      }
    }

    helper(root, []);

    return result;
};

//  LeetCode - Lowest Memory Usage

var binaryTreePaths = function(root) {
    var arr =[]
    var binaryTreePathsHelper = function(root ,str) {
        if(!root.left && !root.right)
            arr.push(str)
            if(root.left )
                binaryTreePathsHelper(root.left, `${str}->${root.left.val}`)
            if(root.right )
                binaryTreePathsHelper(root.right, `${str}->${root.right.val}`)
    }
    binaryTreePathsHelper(root, `${root.val}`)
    return arr
};