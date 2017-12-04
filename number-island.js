/**
 * Created by lee on 10/19/17.
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var m = grid.length;
    if(m == 0) return 0
    var n = grid[0].length;

    var visited = new Array(m).fill().map(function(){
        return Array(n).fill(false);
    })

    var dir = [[0,1],[1,0],[0,-1],[-1,0]];

    function isArea(x,y) {
        return x>=0 && x<m && y>0 && y<n;
    }

    function dfs(x,y){
        visited[x][y] = true;
        for(var i = 0;i < 4; i++) {
            var newx = x + dir[i][0];
            var newy = y + dir[i][1];
            if(isArea(newx,newy) && !visited[newx][newy] && grid[newx][newy] == '1') {
                dfs(newx,newy);
            }
        }
        return;
    }

    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if(grid[i][j] == '1' && !visited[i][j]){
                res++;
                dfs(i,j);
            }

        }
    }

    return res;

};