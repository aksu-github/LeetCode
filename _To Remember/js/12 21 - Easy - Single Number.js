/*
Instruction:

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

/*  Practiced on 12/29
    My Solution
*/

//  My Solution 

/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let myObj = {};

    for ( let i = 0; i < nums.length; i++){
        myObj[nums[i]] = (myObj[nums[i]] || 0) + 1;
    }
    
    for ( key in myObj ){
        if ( myObj[key] == 1 ){
            return key;
        }
    }
    
};

// Bitwise XOR
//	LeetCode - Fastest Runtime

var singleNumber = function(nums) {
    let res = nums[0];
    for(let i = 1; i < nums.length; i++){
        res ^= nums[i];
    }

    return res;
};

//	LeetCode - Lowest Memory Usage

var singleNumber = function(nums) {
	var total = 0;
   
   for(var i = 0; i < nums.length; i++){
	   var num = nums[i];
	   total ^= num;
   }
   
   return total; 
};

var singleNumber = function(nums) {
    return nums.reduce((acc, curr) => acc ^ curr, 0);
};