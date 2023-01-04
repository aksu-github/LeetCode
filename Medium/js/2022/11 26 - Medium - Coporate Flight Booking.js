/*
Instruction:

There are n flights that are labeled from 1 to n.

You are given an array of flight bookings bookings, 
where bookings[i] = [firsti, lasti, seatsi] represents a 
booking for flights firsti through lasti (inclusive) 
with seatsi seats reserved for each flight in the range.

Return an array answer of length n, where answer[i] is the total number of seats reserved for flight i.

 

Example 1:

Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5

Output: [10,55,45,25,25]

Explanation:

Flight labels:        1   2   3   4   5
Booking 1 reserved:  10  10
Booking 2 reserved:      20  20
Booking 3 reserved:      25  25  25  25
Total seats:         10  55  45  25  25
Hence, answer = [10,55,45,25,25]


Example 2:

Input: bookings = [[1,2,10],[2,2,15]], n = 2

Output: [10,25]

Explanation:

Flight labels:        1   2
Booking 1 reserved:  10  10
Booking 2 reserved:      15
Total seats:         10  25
Hence, answer = [10,25]

*/

//  My Solution 

/*
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
    let answer = Array(n).fill(0);

    for ( let i = 0; i < bookings.length; i++){
        let [first, last, seats] = bookings[i];
        
        for ( let j = first - 1; j < last; j++){

            answer[j] += seats; 
        }
    }
    return answer
};

//  LeetCode - Fastest Runtime

var corpFlightBookings = function(bookings, n) {
    let res = new Array(n).fill(0);
    for(const [f,t,s] of bookings){
        res[f - 1] += s;
        if(t < n) res[t] -= s;
    }
    for(let i = 1; i < n; i++){
        res[i] += res[i - 1];
    }
    return res;
};

//  LeetCode - Lowest Memory Usage

 var corpFlightBookings = function(bookings, n) {
    var ans = Array(n).fill(0);
    for(var booking of bookings){
        for(var i=booking[0]-1; i<booking[1]; i++){
            ans[i]+=booking[2];
        }
    }
    return ans;
};