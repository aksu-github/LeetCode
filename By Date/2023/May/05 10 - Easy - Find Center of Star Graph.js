/*
Instruction:

There is an undirected star graph consisting of n nodes labeled from 1 to n. 
A star graph is a graph where there is one center node and exactly n - 1 edges 
that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] 
indicates that there is an edge between the nodes ui and vi. 

Return the center of the given star graph.

Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

*/ 

/*  
*/

//  My Solution

/*
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let res = 0,
        compare  = 0;
    edges.flat().reduce( (acc,a,_) => {
        if ( a in acc ){
            acc[a]++;
        } else {
            acc[a] = 1;
        }

        if ( acc[a] > compare ){
            compare = acc[a];
            res = a;
        }
        return acc;
    }, [])
    return res;
};

//  LeetCode - Fastest Runtime + Lowest Memory Usage

var findCenter = function(edges) {
    const [[a, b], [c, d]] = edges;
    return a === c || b === c ? c : d;
};