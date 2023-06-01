/*
Instruction:

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

*/ 

/*  
*/

//  My Solution - Fastest Runtime

/*
 * @return {Function}
 */
var createHelloWorld = function() {
  return function(...args) {
      return `Hello World`
  }
};

//  LeetCode - Lowest Memory

var createHelloWorld = function() {
  return () => `Hello World`;
};