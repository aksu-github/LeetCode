/*
Instruction:

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number 
of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

*/

/*  Practiced on 1/8
    LeetCode - Fastest Runtime
*/

//  LeetCode

/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    // 1. Make an array with the zigzag sequence
    const zigzag = [...new Array(numRows).keys()];
  
    zigzag.push(...zigzag.slice(1, -1).reverse());
  
    // 2. Make an array with as many strings as we need rows
    const rows = new Array(numRows).fill('');
    console.log([...s]);
    // 3. Append the characters to the row strings in zigzag sequence
    [...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c));
    // 4. Join the row strings in the array together
    return rows.join('');
  };

//  LeetCode - Lowest Memory Usage

var convert = function(s, numRows) {
    if (numRows === 1 || s.length < numRows) return s;
    let row = 0
    let reverse = false
    let array = Array(numRows).fill("")

    for(let i = 0; i < s.length; i++) {
        array[row] += s[i]

        reverse ? row-- : row++;
        if (row === numRows - 1 || row === 0) reverse = !reverse;
    }

    return array.join("")
};

//  LeetCode - Fastest Runtime

var convert = function(s, numRows) {
  if ( numRows == 1 ){
      return s;
  }

  const ROWS = new Array(numRows).fill('');
  let currentRow = 0,
      goDown = false;
  
  for ( let char of s){
      ROWS[currentRow] += char;

      if ( currentRow == 0 || currentRow == numRows - 1 ){
          goDown = !goDown;
      }

      currentRow += goDown ? 1 : -1;
  }

  return ROWS.join('');
};