/*
Instruction:

Given a strictly increasing array arr of positive integers forming a sequence, 
return the length of the longest Fibonacci-like subsequence of arr. 

If one does not exist, return 0.

A subsequence is derived from another sequence arr by deleting 
any number of elements (including none) from arr, 
without changing the order of the remaining elements. 

For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].

 

Example 1:

Input: arr = [1,2,3,4,5,6,7,8]
Output: 5
Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].

Example 2:

Input: arr = [1,3,7,11,12,14,18]
Output: 3
Explanation: The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].

*/

//  My Solution 

//  Should work, but getting Time Limit Exceeded

/*
 * @param {number[]} arr
 * @return {number}
 */
 var lenLongestFibSubseq = function(arr) {
    let res = 2;

    for ( let i = 0; i < arr.length; i++){
        for ( let j = i+1; j < arr.length; j++){
            let seed1 = arr[i],
                seed2 = arr[j],
                fib,
                len = 2;

                fib = seed1 + seed2;

            while ( arr.includes(fib) ){
                let temp = seed2 + fib;

                seed2 = fib;
                fib = temp;
                res = Math.max( res, ++len)
            }
        }
    }
    return res >= 3 ? res : 0;
};

//  LeetCode - Lowest Memory

var lenLongestFibSubseq = function(A) {
    let N = A.length;
    let S = new Set(A);

    let ans = 0;
    for (let i = 0; i < N; ++i)
        for (let j = i+1; j < N; ++j) {
            /* With the starting pair (A[i], A[j]),
             * y represents the future expected value in
             * the fibonacci subsequence, and x represents
             * the most current value found. */
            let x = A[j], y = A[i] + A[j];
            let length = 2;
            while (S.has(y)) {
                let z = x + y;
                x = y;
                y = z;
                ans = Math.max(ans, ++length);
            }
        }

    return ans >= 3 ? ans : 0;
};

//  LeetCode - Shortest Runtime

var lenLongestFibSubseq = function(arr) {
    const n = arr.length;
    let result = 0;
    const map = new Map();
    
    function updateMapAndResult(first, second, sum) {
        let key = `${first}-${second}`;
        // if FibSequence already had members, getting old value and increasing it by 1
        const value = (map.get(key) + 1) || 3;
        map.delete(key);
            
        // there is a FibSequence with length = value and new last members arr[second] and arr[sum]
        map.set(`${second}-${sum}`, value);
        result = Math.max(result, value);
    }
    
    for (let i = 2; i < n; i++) {
        // looking for numbers with sum equal to arr[i]
        let start = 0, end = i - 1;
        while(start < end) {
            const sum = arr[start] + arr[end];
            if (sum == arr[i]) {
                updateMapAndResult(start, end, i);
                start++;
                end--;
            } else {
                if (sum > arr[i]) {
                    end--;
                } else {
                    start++;
                }
            }
        }
    }
    
    return result;
};