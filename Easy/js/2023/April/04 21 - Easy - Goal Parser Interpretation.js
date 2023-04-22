/*
Instruction:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

*/ 

/*  
*/


//  My Solution - 1 of Fastest Solution + Lowest Memory Usage

/*
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {

    return command.replace( /\(\)/g, 'o')
                    .replace( /\(al\)/g, 'al');
};

//  LeetCode - 1 of Fastest Solution + Lowest Memory Usage

var interpret = function(command) {
   
    let result = command.replaceAll("()", "o").replaceAll("(al)","al");
    return result;
};