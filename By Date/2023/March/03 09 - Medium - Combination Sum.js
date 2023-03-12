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

/*  03/10
    Practice Tracing Fastest Runtime + Lowest Memory Usage
*/

/*  03/11
    Practice Tracing Fastest Runtime + Lowest Memory Usage
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
    let res = [];
    
    candidates.sort((a,b) => a - b);

    const dfs = (index, arrC, val, arrPath) => {
        if( val < 0 ){
            return;
        }
        if ( val === 0 ){
            res.push([...arrPath]);
            return;
        }
        for ( let i = index; i < arrC.length; i++){
            arrPath.push(arrC[i]);
            dfs(i, candidates, val - arrC[i], arrPath);
            arrPath.pop();
        }
    }
    dfs(0, candidates, target, []);
    return res;
};