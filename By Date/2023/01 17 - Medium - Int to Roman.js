/*
Instruction:

*/

/*  Practiced on 

*/

//  LeetCode - Fast Runtime

/*
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = {
        'M':  1000, 'CM': 900, 'D':  500, 'CD': 400,
        'C':  100,  'XC': 90,  'L':  50,  'XL': 40,
        'X':  10,   'IX': 9,   'V':  5,   'IV': 4, 'I':  1
    },  
	romanNum = '';
	
    for(let i in roman){
        while(num >= roman[i]){
            romanNum += i;
            num -= roman[i];
        }
    }
    return romanNum; 
};

//  LeetCode - Lowest Memory Usage

var intToRoman = function(num) {
    // find higest number I can use
       // higest number <= current
    // subtract from total
    // repeat until we get to 0

    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    function nextBestNumber(curr) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] <= curr) {
                return i;
            }
        } 

        return -1;
    }

    let rest = num;
    let ans = '';

    // O(n)
    while (rest > 0) {
        let nextNumberIdx = nextBestNumber(rest);
        let nextNumber = numbers[nextNumberIdx];
        rest -= nextNumber;
        let symbol = symbols[nextNumberIdx];

        ans += symbol;
    }

    return ans;
};