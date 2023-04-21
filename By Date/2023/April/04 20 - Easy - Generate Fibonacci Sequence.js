/*
Instruction:

Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

*/ 

/*  
*/


//  LeetCode

/*
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    // initialise first 2 sequence numbers
    // initialise a loop so that function can return values indefinitely when called
    // yield pauses fx execution and returns value, before continuing subsequent steps
    // fibonacci sequence is updated in steps after yield
        // note: 
            // third term is the sum of first and second term
            // therefore: n term is sum of n-1 term + n-2 term
    let a = 0;
    let b = 1;

    while (true){
        yield a;
        [a,b] = [b,a+b];
    }

};