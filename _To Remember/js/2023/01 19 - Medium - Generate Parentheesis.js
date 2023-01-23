/*
Instruction:

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

    // /*
    //  * Examples 
    //  * n = 1
    //  *  ()
    //  *
    //  *  n = 2
    //  *  (())
    //  *  ()()
    //  *
    //  *  n = 3
    //  *  ((()))
    //  *  (()())
    //  *  (())()
    //  *  ()(())
    //  *  ()()()
    //  

*/

/*  Practiced on 1/20
    Trying to manually trace

    Backtracking and keep track of number of opening and closing brackets have been used either by incrementing or decrementing.
    You know you can only start with an opening: (
    At this point, you have 2 options: add more ( or now you can add ) to close it.
    When can you add more (? Whenever you haven't used up all the n openings. n pairs = n openings and n closings.
    When can you add more )? Whenever you have more openings than closings.

    '('->'()'->'()('->'()()'->'()()('=>'()()()'
                    ->'()(('->'()(()'=>'()(())'
       ->'(('->'(()'->'(()('->'(()()'=>'(())())'
                    ->'(())'->'(())('=>'(())()'
             ->'((('=>'((()))'

*/

/*  Practiced on 1/21

*/

//  A Solution

var generateParenthesis = function(n) {
  const output = [];

  const dfs = (str, open, close) => {
    // Close parentheses can not be more than open parentheses at any 
    // given time to stay valid.
    if (open > close) {
      return;
    }
    // Base case. We now have n pairs of parentheses
    if (open === 0 && close === 0) {
      output.push(str);
      return;
    }
    // Insert open parenthsis and search for the next valid insertion.
    if (open > 0) {
      dfs(`${str}(`, open - 1, close);
    }
    // Insert close parenthsis and search for the next valid insertion.
    if (close > 0) {
      dfs(`${str})`, open, close - 1);
    }
  };
  dfs('', n, n);
  return output;
};

//  LeetCode - Fastest Runtime

var generateParenthesis = function(n) {
  const result = []

function helper(open, close, string){
  if(close === n && open === n) result.push(string)

  if(open < n){
    helper(open+1, close, string+'(')
  }
  if(close < open){
    helper(open, close+1, string+')')
  }
}

helper(0,0,'')

return result
};