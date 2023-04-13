/*
Instruction:

Write a function that takes an input array of integers arr and mapping function fn and returns a new array.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

*/ 

/*  
*/


//  My Solution

/*
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = new Array(arr.length);
    for ( let i = 0; i < arr.length; i++){
        newArr[i] = fn(arr[i],i);
    }
    return newArr;
};