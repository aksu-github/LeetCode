/*
Instruction:

Reverse bits of a given 32 bits unsigned integer.

*/

/*  

*/

//  A Solution

var reverseBits = function(n) {
  var result = 0;
  var count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
};

//  A Solution - Using only Bitwise Operators

function reverseBits(n){
  let result = 0;

  for (let i = 0; i < 32; i++) {
    // find the last bit of n
    const lastBit = n & 1;

    // shift the last bit of n to the left
    const reversedLastBit = lastBit << (31 - i);

    // insert the reversed last bit of n into the result
    result |= reversedLastBit;

    // the last bit of n is already taken care of, so we need to drop it
    n >>>= 1;
  }

  // convert the result to an unsigned 32-bit integer
  return result >>> 0;
}

//  LeetCode - Fastest Runtime

var reverseBits = function(n) {
  let binaryNum = (n >>> 0).toString(2);
  let reversedBinary = binaryNum.split("").reverse("").join("");
  if(reversedBinary.length <32){
      reversedBinary = reversedBinary + "0".repeat(32-reversedBinary.length)
  }
  let reversedNum = parseInt(String(reversedBinary), 2);
  return reversedNum
};

//  LeetCode - Lowest Memory Usage

var reverseBits = function(n) {
  let result = 0;

  for(let i = 0; i < 32; i++) {
      result = result * 2 + n % 2;
      n >>>= 1;
  }

  return result;
};