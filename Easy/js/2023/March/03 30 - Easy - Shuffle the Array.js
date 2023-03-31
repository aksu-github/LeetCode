/*
Instruction:

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

*/ 

/*  
*/


//  My Solution - Fastest Runtime + Lowest Memory Usage

/*
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let res = [];
    for ( let i = 0; i < n; i++){
        res.push(nums[i], nums[i+n]);
    }
    return res;
};

//  LeetCode - In Place

var shuffle = function(nums, n) {
    let i = n - 1
    for (let j = nums.length - 1; j >= n; j--) {
        nums[j] <<= 10
        nums[j] |= nums[i]
        i--
    }
    
    i = 0
    for (let j = n; j < nums.length; j++) {
        const num1 = nums[j] & 1023
        const num2 = nums[j] >> 10
        nums[i] = num1
        nums[i + 1] = num2
        i += 2    
    }
    
    return nums
};