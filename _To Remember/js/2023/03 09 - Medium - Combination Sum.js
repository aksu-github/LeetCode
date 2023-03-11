/*
Instruction:

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []

*/ 

/*  Practice Tracing Fastest Runtime + Lowest Memory Usage
*/

//  LeetCode 
/*
 * @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/
var combinationSum = function(candidates, target) {
    const result = [];

    function permute(arr=[], sum=0, idx=0) {
        if(sum === target) {
            result.push(arr);
            return;
        }
        for(let i = idx; i < candidates.length; i++) {
            if(sum + candidates[i] <= target){
                permute([...arr, candidates[i]], sum+candidates[i], i);
            }
        }
    }
    permute()
    return result; 
};

//  LeetCode - Fastest Runtime + Lowest Memory Usage

var combinationSum = function(candidates, target) {
    let result = [];
    let slate = [];
    candidates.sort((a,b) => a-b);
    const dfs = (i, candidates, target, slate) => {
        if(target < 0) return;
        if(target === 0){
            result.push([...slate])
            return;
        }
        for(let j=i; j<candidates.length; j++){
            slate.push(candidates[j]);
            dfs(j, candidates, target - candidates[j], slate)
            slate.pop();
        }
    }
    dfs(0, candidates, target, slate)
    return result;
};