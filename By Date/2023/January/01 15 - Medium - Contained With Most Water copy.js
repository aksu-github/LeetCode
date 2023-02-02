/*
Instruction:

You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

/*  Practiced on 1/16
    2 Pointer Solution
*/

/*  Practiced on 1/16
    2 Pointer Solution
*/

//  2 Pointer Solution

/*
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0,
        j = height.length - 1,
        res = 0;
    
    while ( i < j ){
        res = Math.max( res, Math.min( height[i], height[j] ) * ( j - i ));
        height[i] <= height[j] ? i++ : j--;
    }
    return res;
};