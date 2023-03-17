/*
Instruction:



*/ 

/*  Practied on 3/16
    Traced Fastest Runtime By Hand
    Lowest Memory Usage is Same as Fastest runtime
*/


//  LeetCode - Fastest Runtime

var uniquePaths = function(m, n) {
    let perRow = Array(n).fill(1);
    
    // pathCount is 2D array of size m * n
    let pathCount = Array.from( Array(m).fill( perRow ) );
    
    for(let y = 1 ; y < m ; y++){
        for(let x = 1 ; x < n ; x++){
            
            // path count = number of path reach to one step left + number of path reach to one step up
            pathCount[y][x] = pathCount[y][x-1] + pathCount[y-1][x] 
        }
    }
    
    return pathCount[m-1][n-1]

};

//  LeetCode - Lowest Memory Usage

var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(new Array(n));

for(let i=0;i<m;i++){
        dp[i][0] = 1;
}
for(let j=0;j<n;j++){
        dp[0][j]= 1;
}
for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
}
return (dp[m-1][n-1]);
};