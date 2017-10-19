/**
 * Created by lee on 10/18/17.
 */
/**
 * Created by lee on 10/18/17.
 */
var spiralOrder = function(matrix) {
    var array = [];
    if(!matrix || matrix.length === 0) return array;
    if(!matrix[0] || matrix[0].length === 0) return array;

    var row = matrix.length;
    var col = matrix[0].length;

    function helper(matrix, row, col,offset){
        if(row <= 0 || col <= 0) {
            return;
        }

        if(row == 1){
            for(var i = offset; i < col + offset; i++){
                array.push(matrix[offset][i]);

            }

            return; // return 可以什么都不用带的
        }
        if(col == 1){
            for(var i = 0; i < row + offset; i++){
                array.push(matrix[i][offset]);
                console.log('2-',array);
            }
            return; // return 可以什么都不用带的
        }

        // 1. up row
        for(var i = offset; i < col-1+offset; i++){
            array.push(matrix[offset][i]);
        }
        console.log('up-',array);


        //2. right col
        for(var i = offset; i < row -1 + offset; i++){
            array.push(matrix[i][col-1+offset]);
        }
        console.log('right-',array);


        //3. down row
        for(var i = col-1+offset; i>offset; i--){
            array.push(matrix[row-1 + offset][i]);
        }
        console.log('down-',array);


        //4. left col
        for(var i = row-1+offset; i>offset;i--){
            array.push(matrix[i][offset]);
        }

        console.log('4-',array);


        helper(matrix,row-2,col-2,offset+1);
    }

     helper(matrix,row,col,0);
     return array;
};



var test = [[1,2,3],[4,5,6],[7,8,9]];
var test2 = [[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20]]
console.log(spiralOrder(test2))