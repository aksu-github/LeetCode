/*
Instruction:

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/

/*  Practiced on 11/28 
    Re-Did LeetCode - Fastest Runtime
        Understand differentiation between using Array.includes() vs 'in' operator
            includes checks array if value exist
            in checks if key exists
    Re-did Leetcode - Lowest Memory == Brute force method I know how to do
*/
//  My Solution 

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
 function twoSum(nums, target) {
  let res = [];
  let myArr = nums.map( e => e = target - e )
                  .filter( e => nums.includes(e) );
  
  for ( let i = 0; i < myArr.length; i++){
      let total = myArr[i];
      for ( let j = 0; j < myArr.length; j++){
          if ( j != i ){
              total += myArr[j];
              if ( total != target ){
                  total = myArr[i];
              }
              if ( total == target ){
                  res.push( nums.indexOf( myArr[i]) );
                  res.push( nums.lastIndexOf( myArr[j]) );        
              }
          }
      }
  }

  return res.slice(0,2);
};

//  LeetCode - Fastest Runtime

function twoSum( nums, target ){
    let myObj = {};

    for ( let i = 0; i < nums.length; i++ ){
        let first = nums[i],
            sec = target - nums[i];

        if ( sec in myObj ){
            return [ myObj[sec], i ];
        }

        myObj[first] = i;    
    }
}

//  Leetcode - Lowest Memory Usage

function twoSum( nums, target ){
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] == target - nums[i]) {
            return [i, j];
        }
    }
  }
}

/*  
  Leetcode - One Pass Hash Table

While we are iterating and inserting elements into the hash table, 
we also look back to check if current element's complement already 
exists in the hash table. 

If it exists, we have found a solution and return the indices immediately.

*/

function twoSums(nums, target) {

    let myObj = {};
    for (let i = 0; i < nums.length; i++) {

        let complement = target - nums[i];

        //  if complement is true in myObj @ i
        //  Object {
        //      'key1': value1,
        //      'key2': value2              
        //  }
        //  give value of myObj[complement] == index 
        if ( Object.hasOwn(myObj, complement) ){  
            return [ myObj[complement] , i ]    
        }
        
        //  Populate myObj until complement is detected as
        //  nums[i]: index
        //
        //  index here will be i-1 because this will be short-circuited
        myObj[nums[i]] = myObj[nums[i]] || i;
    }
};