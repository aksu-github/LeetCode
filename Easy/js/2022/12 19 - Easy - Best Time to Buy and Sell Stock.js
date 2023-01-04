/*
Instruction:

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

/*  Practiced on 12/27
    New Solution that uses 2 'pointers'
*/

//  My Solution 

/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let   res = 0,
          value1 = prices[0];
  
      for ( let i = 1; i < prices.length; i++ ){
          let profit = prices[i] - value1;
  
          if (profit <= 0) {
              value1 = prices[i]
          } else if (profit > res) {
              res = profit
          }
      }
      return res;
}

//  My Solution - Newer

var maxProfit = function(prices) {
    let res = 0,
        buy = 0,
        sell = 1;
    
    while ( sell < prices.length ){
        let profit = prices[sell] - prices[buy];

        if ( profit <= 0 ){
            buy = sell;
        } else {
            res = Math.max( res , profit);
        }
        sell++;
    }
    return res;
};

//  LeetCode - Fastest Runtime

var maxProfit = function(prices) {
    i=0;
    buy=0;
    profit=0;
    if(prices.length==1){
        return 0;
    }
    while(i<prices.length){
        if(prices[buy]>prices[i]){
            buy=i;
        }
        if(profit<prices[i]-prices[buy]){
            profit=prices[i]-prices[buy];
        }
        i++;
    }
    return profit;
};