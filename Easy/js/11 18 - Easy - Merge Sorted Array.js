/*
Instruction:

You are given two integer arrays nums1 and nums2, 
sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, 
but instead be stored inside the array nums1. 

To accommodate this, nums1 has a length of m + n, 
where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

*/

//  My Solution 

/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let total = m + n - 1;

    for ( let i = nums1.length - 1; i > 0, n > 0; i--, total--){
        if ( nums1[m-1] > nums2[n-1] ){
            nums1[i] = nums1[m-1];
            m--;
        } else {
            nums1[i] = nums2[n-1];
            n--;
        }
    }
};

//  LeetCode

var merge = function(nums1, m, nums2, n) {
    let idx1 = m - 1, idx2 = n - 1, idx3 = m + n - 1;
    
     while(idx2 >= 0) {
         if(nums1[idx1] > nums2[idx2]) {
             nums1[idx3--] = nums1[idx1--]
         } else {
             nums1[idx3--] = nums2[idx2--];
         }
     }
 };