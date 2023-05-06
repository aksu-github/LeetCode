/*
Instruction:

Write a function createCounter. It should accept an initial integer init. 
It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

*/ 

/*  
*/

//  My Solution

/*
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let temp1 = init;

    
    function reset(){
        init = temp1;
        return init;
    }
    function increment(){
        return ++init;
    }
    function decrement(){
        return --init;
    }
    return {increment, decrement, reset};
    /*
        let temp1 = init;
        return {
            reset: () => temp1 = init,
            increment: () => ++init,
            decrement: () => --init,
        }
    */
};