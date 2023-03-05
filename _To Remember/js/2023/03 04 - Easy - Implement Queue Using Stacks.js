/*
Instruction:

*/ 

/*  
*/

//  My Solution

var MyQueue = function() {
	this.stack1 = [];
	this.stack2 = [];
};

/*
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
	this.stack1.push(x);
};

/*
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
	while(this.stack1.length !== 0){
		this.stack2.push(this.stack1.pop());
	}

	let pop = this.stack2.pop();

	while(this.stack2.length !== 0){
		this.stack1.push(this.stack2.pop());
	}

	return pop;
};

/*
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
	while(this.stack1.length !== 0){
		this.stack2.push(this.stack1.pop());
	}

	let pop = this.stack2.pop();
	this.stack2.push(pop);

	while(this.stack2.length !== 0){
		this.stack1.push(this.stack2.pop());
	}

	return pop;
};

/*
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
	return this.stack1.length == 0 ? true : false;
};

//  LeetCode - Fastest Runtimes

var MyQueue = function() {
    this.stack = [];
 };
 
 MyQueue.prototype.push = function(x) {
     this.stack.push(x);
 };
 
 MyQueue.prototype.pop = function() {
     if(this.stack.length === 0) return null;
     return this.stack.shift();
 };
 
 MyQueue.prototype.peek = function() {
     if(this.stack.length === 0) return null;
     return this.stack[0];
 };
 
 MyQueue.prototype.empty = function() {
     return this.stack.length===0;
 };

 // LeetCode - Fastest Runtimes

 var MyQueue = function() {
    this.stack = []
};
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};
MyQueue.prototype.pop = function() {
    return this.stack.shift();
};
MyQueue.prototype.peek = function() {
    return this.stack[0];
};
MyQueue.prototype.empty = function() {
    if(this.stack.length>0)
        return false;
    else
        return true;
};