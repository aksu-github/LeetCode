/*
Instruction:

Given two integer arrays nums1 and nums2, return an array of their intersection. 

Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/ 

/*  Practice 2/24
    The reduce version ( Fast Runtime + Low Memory Usage)
*/

//  My Solution

/*
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*/
var intersection = function(nums1, nums2) {
    let mySet = new Set(nums1);
 
    return [...new Set(nums2.filter( e => mySet.has(e)))];
 };
 
 //  LeetCode - Fastest Runtime
 
 var intersection = function(nums1, nums2) {
     let set1 = new Set(nums1);
     let arr1 = [...set1]
 
     let set2 = new Set(nums2);
     let arr2 = [...set2];
 
     let ans = [];
     for(let i=0;i<arr1.length;i++){
         if(set2.has(arr1[i])){
             ans.push(arr1[i]);
         }
 
     }
     return ans;
 };
 
 //  LeetCode - One of Lowest Memory Usage + Faster Runtimes
 
 var intersection = function(nums1, nums2) {
     return nums1.reduce((acc, item) => {
         if (nums2.includes(item) && !acc.includes(item)) {
             acc.push(item);
         }
 
         return acc;
     }, []);
 };