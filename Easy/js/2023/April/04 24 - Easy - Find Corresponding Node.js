/*
Instruction:

Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the 
target node and the answer must be a reference to a node in the cloned tree.

*/ 

/*  
*/


//  My Solution - Fastest Runtime

/*
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    function helper(ogNode, copyNode){
        if (!ogNode){
            return;
        }
        if (ogNode == target){
            return copyNode;
        }
        return helper(ogNode.left, copyNode.left) || helper(ogNode.right, copyNode.right)
    }
    return helper(original, cloned);
};

//  LeetCode - My Solution without Helper Function - Fastest Runtime + Lowest Memory Usage

var getTargetCopy = function(original, cloned, target) {
    
    if( original == null ){
        
        // Base case aka stop condition
        // empty tree or empty node
        return null;
    }
    
    // General cases
    if( original == target ){
       
        // current original node is target, so is cloned
        return cloned;
    }
    
    // Either left subtree has target, or right subtree has target
    return getTargetCopy(original.left, cloned.left, target) || 
           getTargetCopy(original.right, cloned.right, target);
    
};