/*
Instruction:

Example 1:

Input: n = 7
Output: 6
Explanation: Details of the tournament: 
- 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
- 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 3 + 2 + 1 = 6.

Example 2:

Input: n = 14
Output: 13
Explanation: Details of the tournament:
- 1st Round: Teams = 14, Matches = 7, and 7 teams advance.
- 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.
- 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 7 + 3 + 2 + 1 = 13.

*/ 

/*  
*/

//  My Solution - Fastest Runtime + Lowest Memory Usage

/*
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    return n - 1;
};

//  LeetCode - Logical Way of Going About This

var numberOfMatches = function(n) {
    let rounds = 0
    let teams = n
    while (teams>1){
 
        if(teams%2==0){
            rounds += teams/2
            teams /= 2
            
        }else{
            rounds += (teams - 1) / 2 +1
            teams = (teams-1)/2
           
        }
        
    } 
    return rounds
 };