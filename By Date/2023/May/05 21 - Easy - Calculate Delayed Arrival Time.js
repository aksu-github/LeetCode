/*
Instruction:

*/ 

/*  
*/

//  My Solution - Fastest Runtime

/*
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
};

//  LeetCode - Lowest Memory Usage

var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
  const x = arrivalTime + delayedTime;
  if(x >= 24){
      return x - 24
  }

  return x
};