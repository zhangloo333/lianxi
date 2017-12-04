/**
 * Created by lee on 11/8/17.
 */
function max3(arr) {
    var l = 0, r = 0;
    var sum = arr[0];
    var out = arr[0];
    var board = [];

    while(l < arr.length && r < arr.length) {
        if(sum < 0) {
            l++;
            r = l;
            out = Math.max(out,arr[l]);
            sum = arr[l];
            console.log(out);
        } else{
            if(r+1 < arr.length){
                sum += arr[++r];
                out = Math.max(out,sum);
                // var temp = Math.max(out,sum);
                // if(temp > out) {
                //     board.pop();
                //     board.push([l,r,temp]);
                //     out = temp;
                // }
                // console.log('out2', out);
            } else break;

        }
    }
    return out;
    // return board;
}
var num1 = [-2,1,-3,4,-1,2,1,-5,4];

console.log(max3(num1));
