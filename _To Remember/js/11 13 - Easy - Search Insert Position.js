/*
Instruction:

Given a sorted array of distinct integers and a target value, 
return the index if the target is found. 

If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

*/

/*  Practiced on 12/1
    Re-Did Using Iterative - Faster Runtime

    Re-did Leetcode - Lowest Runtime
*/

//  My Solution 

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if ( nums.includes(target) ) return nums.indexOf(target)
    else {
        let c = 0;
        for ( let i = 0; i < nums.length; i++){
            if ( nums[i] < target ){
                c++;
            }
        }
        return c;
    };
};

//  Leetcode - Fastest Runtime (Binary Search)

var searchInsert = function(nums, target){
    let mid = 0;
    let l = 0;
    let r = nums.length - 1

    while (l <= r) {
        mid = l + Math.floor( (r - l) / 2);
        if (target == nums[mid]) {
            return mid;
        }
        else if (nums[mid] > target) r = mid  - 1 
        else l = mid + 1 ;    
    }
    return l;   
};
