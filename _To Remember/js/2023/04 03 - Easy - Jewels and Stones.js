/*
Instruction:

You're given strings jewels representing the types of stones that are jewels, 
and stones representing the stones you have. 
Each character in stones is a type of stone you have. 
You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

*/ 

/*  
*/


//  My Solution

/*
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let seen = new Set(jewels);
    return stones.split('').reduce( (a,b) => a + seen.has(b), 0)
};

//  LeetCode - Fastest Runtimes

var numJewelsInStones = function(jewels, stones) {
    let count = 0
    for(i = 0; i < stones.length; i++){
        if (jewels.indexOf(stones[i]) !== -1) {
            count++;
        }
    }
    return count;
};

const numJewelsInStones = (jewels, stones) => {
    const arr = stones.split('');
    const result = arr.filter(e => jewels.includes(e));
    return result.length
};

//  LeetCode - Lowest Memory Usage

function numJewelsInStones (jewels, stones) {
    const map = new Map();
    let result = 0;
    
    for (let i = 0; i < jewels.length; i++) {
        const jewelry = jewels[i];
        map.set(jewelry, i);
    }
    
    for (let i = 0; i < stones.length; i++) {
        const stone = stones[i];
        if(map.has(stone)) result++;
    }
    
    return result;
};