/*
Instruction:

Example 1:

Input: items = [["phone","blue","pixel"],
        ["computer","silver","lenovo"],
        ["phone","gold","iphone"]], 
        
        ruleKey = "color", ruleValue = "silver"

Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

*/ 

/*  
*/

//  My Solution

/*
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const ID = {
        type: 0,
        color: 1,
        name: 2
    }
    let res = 0;

    for ( let i = 0; i < items.length; i++){
        if ( items[i][ID[ruleKey]] === ruleValue ){
            res++;
        }
    }
    return res;
};
