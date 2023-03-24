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

/*  Practied on 3/23
    Tried tracing
*/


//  LeetCode - Fastest Runtime + Low Memory Usage

/*
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if ( !digits ){
      return [];
  }

  const DATA = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
  }

  let res = [];

  let dfs = (index, path) => {
      if ( path.length == digits.length ){
          res.push(path.join(''));
          return;
      }

      let letter = DATA[digits[index]];
      
      for ( let x of letter){
          path.push(x);
          dfs(index+1, path);
          path.pop();
      }
  }

  dfs(0, []);
  return res;
};