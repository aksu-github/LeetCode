/*
Instruction:

*/ 

/*  
*/

//  My Solution

/*
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let cond = true,
        c = 0;
    
    for ( let i = 0; i < s.length; i++){
        if ( cond && s[i] == '*'){
            c++;
        }
        if ( s[i] == '|'){
            cond = !cond;
        }
    }
    return c;
};