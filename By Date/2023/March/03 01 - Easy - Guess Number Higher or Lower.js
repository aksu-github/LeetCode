/*
Instruction:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

*/ 

/*  
*/

//  My Solution

/*
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/*
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 0,
        r = n;
    while ( l <= r ){
        let mid = (l + r) / 2 | 0;
        if ( guess(mid) == 0 ){
            return mid;
        } else if ( guess(mid) == -1 ){
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
};