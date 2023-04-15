/*
Instruction:

Given a positive integer millis, write an asyncronous 
function that sleeps for millis milliseconds. 

It can resolve any value.

*/ 

/*  
*/


//  LeetCode - Fastest Runtime + Lowest Memory Usage

/*
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise(res => setTimeout(res, millis));
}


// async function sleep(millis) {
//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve()
//         },millis)
//     })

//     return promise
// }