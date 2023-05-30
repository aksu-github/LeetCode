/*
Instruction:

Example 1:

Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

*/ 

/*  
*/

//  My Solution

/*
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  let myImg = image;
  for ( let i = 0; i < myImg.length; i++){
      myImg[i].reverse();
      myImg[i] = myImg[i].map( e => 1 - e )
  } 
  return myImg;
  //return image.map(image => image.reverse().map( b => b === 0 ? 1 : 0));
};

//  LeetCode - Lowest Memory

var flipAndInvertImage = function(image) {
  const n = image.length;

for (let i = 0; i < n; i++) {
  image[i].reverse();
  for (let j = 0; j < n; j++) {
    image[i][j] = image[i][j] === 0 ? 1 : 0;
  }
}
return image;
};