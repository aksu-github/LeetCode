/*
Instruction:

Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]

*/ 

/*  
*/


//  LeetCode

/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let res = [], path = [];
    
    
    var makeSubsetFrom = function( startIndex ){    
        // JS object is passing by referece, so we have to make a copy here
        res.push( [...path] );
        
        //// Base cases aka stop condition:
        // No more element
        if ( startIndex == nums.length ){
            return;
        }
        
        //// General cases
        // Current level, we choouse element on index i
        for( let i = startIndex ; i < nums.length ; i++){
            path.push( nums[i] );    // put this element into bag
            makeSubsetFrom( i+1 );  // make subset from remaining elements
            path.pop();              // undo selection
        }
    }
    
    makeSubsetFrom( 0 );
    return res;
    
};

//  LeetCode - Fastest Runtime

var subsets = function(nums) {
    let outputArray = [];
    
    const dfs = (nums, depth, subset) => {
        if(depth === nums.length){
            outputArray.push([...subset]);
            return;
        }
        
        dfs(nums, depth + 1, subset);
        
        subset.push(nums[depth])
        dfs(nums, depth + 1, subset);
        subset.pop()
        
    }
    dfs(nums, 0, [])
    
    
    
    return outputArray;
};

//  LeetCode - Lowest Memory Usage

var subsets = function(nums) {
    const result=[];
    const dfs=(i,nums,slate)=>{
        if(i===nums.length){
            result.push(slate.slice());
            return ;   
        }
        dfs(i+1,nums,slate);
        slate.push(nums[i]);
        dfs(i+1,nums,slate);
        slate.pop();
    }
    dfs(0,nums,[]);
    return result;
};