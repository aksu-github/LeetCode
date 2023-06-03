/*
Instruction:

Given a function fn, an array or arguments args, 
and a timeout t in milliseconds, 
return a cancel function cancelFn.

After a delay of t, fn should be called with args passed as parameters unless cancelFn was called first. 
In that case, fn should never be called.

 

Example 1:

Input: fn = (x) => x * 5, args = [2], t = 20, cancelTime = 50
Output: [{"time": 20, "returned": 10}]
Explanation: 
const cancel = cancellable(fn, [2], 20); // fn(2) called at t=20ms
setTimeout(cancel, 50);

the cancelTime (50ms) is after the delay time (20ms), so fn(2) should be called at t=20ms. 
The value returned from fn is 10.

Example 2:

Input: fn = (x) => x**2, args = [2], t = 100, cancelTime = 50
Output: []
Explanation: fn(2) was never called because cancelTime (50ms) is before the delay time (100ms).




  const result = []

  const fn = (x) => x * 5
  const args = [2], t = 20, cancelT = 50

  const log = (...argsArr) => {
      result.push(fn(...argsArr))
  }
       
  const cancel = cancellable(fn, args, t);
           
  setTimeout(() => {
     cancel()
     console.log(result) // [{"time":20,"returned":10}]
  }, cancelT)
 

*/ 

/*  
*/

//  My Solution

/*
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {

  const cancel = setTimeout( () => {
      fn(...args);
  }, t);
  return function(){
      clearTimeout(cancel);
  }
};

//  LeetCode

var cancellable = function(fn, args, t) {
  const cancel = setTimeout( () => {
      fn(...args);
  }, t);
  return () => clearTimeout(cancel);
};