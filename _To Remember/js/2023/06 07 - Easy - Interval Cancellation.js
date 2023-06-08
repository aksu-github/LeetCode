/*
Instruction:

Given a function fn, 
an array of arguments args, 
and an interval time t, 
return a cancel function cancelFn. 

The function fn should be called with args immediately 
and then called again every t milliseconds until cancelFn is called.
 

Example 1:

Input: fn = (x) => x * 2, args = [4], t = 20, cancelT = 110
Output: 
[
   {"time": 0, "returned": 8},
   {"time": 20, "returned": 8},
   {"time": 40, "returned": 8},
   {"time": 60, "returned": 8},
   {"time": 80, "returned": 8},
   {"time": 100, "returned": 8}
]
Explanation: Every 20ms, fn(4) is called. Until t=110ms, then it is cancelled.

const cancel = cancellable(x => x * 2, [4], 20);
setTimeout(cancel, 110);

1st fn call is at 0ms. fn(4) returns 8.
2nd fn call is at 20ms. fn(4) returns 8.
3rd fn call is at 40ms. fn(4) returns 8.
4th fn call is at 60ms. fn(4) returns 8.
5th fn call is at 80ms. fn(4) returns 8.
6th fn call is at 100ms. fn(4) returns 8.


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
  fn(...args);
  const intervalFn = setInterval( () => fn(...args), t );
  const cancelFn = () => clearInterval(intervalFn);
  return cancelFn;
};