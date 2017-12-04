var numIslands = function(grid) {
    var res = 0;
    var m = grid.length;
    if(m == 0) return 0;
    var n = grid[0].length;
    var dir = [[0,1],[1,0],[0,-1],[-1,0]];

    var visted = Array(m).fill().map(function () {
        return Array(n).fill(false);
    })

    function inArea(x,y) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }

    function dfs(grid1, x, y) {
        //这个递归没有 没有停止条件为什么；因为已经融入我们的if条件语句中

        visted[x][y] = true;
        for(var i = 0; i < 4 ; i++) {
            var newx = x + dir[i][0];
            var newy = y + dir[i][1];
            if(inArea(newx,newy) && !visted[newx][newy] && grid1[newx][newy] == "1") {
                dfs(grid1,newx,newy);
            }
        }
        return;
    }

    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if(grid[i][j] == "1" && !visted[i][j]) {
                res++;
                dfs(grid,i,j);
            }
        }
    }

    return res
};

var test = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
console.log(numIslands(test));