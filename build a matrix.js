/**
 * Created by leizha on 5/4/17.
 */

var matrix = function(rows, cols, init) {
    var tempMatrix = [];

    for(var i = 0; i < rows; i++) {
        var tempcols = [];
        for(var j = 0; j < cols; j++){
            tempcols.push(init);
        }
        tempMatrix.push(tempcols);
    }
    return tempMatrix;
}

var matrix = function(rows, cols) {
    return new Array(rows).fill(new Array(cols).fill());
}


console.log(matrix(2,4,3));