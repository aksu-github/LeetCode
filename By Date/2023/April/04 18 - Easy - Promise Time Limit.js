/*
Instruction:

Given an asyncronous function fn and a time t in milliseconds, 
return a new time limited version of the input function.

A time limited function is a function that is identical to the 
original unless it takes longer than t milliseconds to fullfill. 

In that case, it will reject with "Time Limit Exceeded".  
Note that it should reject with a string, not an Error.

 

Example 1:

Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50

Output: {"rejected":"Time Limit Exceeded","time":50}

Explanation:
The provided function is set to resolve after 100ms. However, 
the time limit is set to 50ms. 
It rejects at t=50ms because the time limit was reached.

*/ 

/*  
*/


//  LeetCode - Fastest Runtime + Lowest Memory Usage

/*
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        const originalFnPromise = fn(...args);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        })

        return Promise.race([originalFnPromise, timeoutPromise]);
    }
};