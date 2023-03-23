/*
Instruction:

Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent. 

Return the answer in any order.

const DATA = {
    '2':"abc",
    '3':"def",
    '4':"ghi",
    '5':"jkl",
    '6':"mno",
    '7':"pqrs",
    '8':"tuv",
    '9':"wxyz"
};

*/ 

/*  
*/


//  LeetCode - Fastest Runtime + Low Memory Usage

/*
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations (digits) {
    if (digits == "") return []

    const digitToLetters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  }

  let combinations = []
  
  function backtrack(current, index){
    if (current.length === digits.length){
    combinations.push(current.join(""))
    return
    }

    let letters = digitToLetters[digits[index]]
    for (let letter of letters){
    current.push(letter)
    // Do not use ++index on the backtrack parameter
    // instead use index+1 because you modify the value
    // of index variable on the current function,
    // you can check this behavior using debugger.
    backtrack(current, index+1)
    current.pop()
    }
  }
  backtrack([], 0)

  return combinations
}