/*
Instruction:

Example 1:

Given an array nums of distinct integers, 
return all the possible permutations. 
You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]

*/ 

/*  
*/


//  My Solution 

/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];

    let dfs = (index, arr, seen, path) => {
        if (path.length === arr.length){
            res.push([...path])
            return;
        }
        for ( let i = index; i < arr.length; i++){
            if ( seen[i] ){
                continue;
            }
            path.push(arr[i])
            seen[i] = 1;
            dfs(index, nums, seen, path);
            path.pop();
            seen[i] = 0;
        }
    }
    dfs(0,nums,Array(nums.length).fill(0),[]);
    return res;
};

//  LeetCode - Fastest Runtime

var permute = function(nums) {
    let res = [];
    let seen = new Array(nums.length).fill(false);
    backtrack(nums, res, [], seen);
    return res;
};


const backtrack = (nums, res, track, seen)=>{
    // goal
    if(track.length === nums.length){
        res.push([...track]);
        return;
    }
    // for choice
    for(let i=0; i<nums.length; i++){
        // validate, has seen already, prune
        if(seen[i]) continue;
        track.push(nums[i]);
        seen[i] = true;

        // enter next choice
        backtrack(nums, res, track, seen);
        
        // undo
        track.pop();
        seen[i] = false;
    }
};

//  LeetCode - Lowest Memory Usage

var permute = function(nums, n = 0) {
    if (n >= nums.length) { return [[]]; }

    let res = [];
    let prevs = permute(nums, n + 1);

    for (let prev of prevs) {
        for (let i = 0; i <= prev.length; i++) {
            let prevCopy = prev.slice(0);
            prevCopy.splice(i, 0, nums[n]);
            res.push(prevCopy);
        }
    }

    return res;
};