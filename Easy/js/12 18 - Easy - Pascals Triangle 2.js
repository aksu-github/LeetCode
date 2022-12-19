/*
Instruction:

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

*/

//  My Solution 

/*
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [];
    for ( let i = 0; i < rowIndex + 1; i++){
        res[i] = [];
        res[i][0] = 1;
        
        for ( let j = 1; j < i; j++){
            res[i][j] = res[i-1][j-1] + res[i-1][j];
        }
        res[i][i] = 1;
    }
    return res.slice(-1).flat();
};

//  LeetCode - Fastest Runtime

var getRow = function(rowIndex) {
    let last = [];
   for(let i=1;i<=rowIndex+1;++i){
       let array=[];
       for(j=0;j<i;++j){
           if(j===0 || j===i-1){
               array[j] =1
           }else {
               array[j] = last[j-1]+last[j];
           }
       }
       last = array;
   }
    return last;
};

//  LeetCode - Lowest Memory Usage

var getRow = function(rowIndex) {
    const res = [1];
  
    for (let i = 1; i <= rowIndex; i++) {
      for (let j = i; j > 0; j--) {
        if (i === j) res[j] = 1;
        else res[j] = res[j] + res[j - 1];
      }
    }
  
    return res;
  }