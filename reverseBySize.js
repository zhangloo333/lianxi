/**
 * Created by leizha on 7/13/17.
 *
 * 解题思路： 首先能把所有的array 都可以reverse，
 * 然后，部分reverse 通过改变 array start 的大小，前后移动 局部reverse
 */



function rescerBySize(arr, size) {
    if(arr.length == 0 || size === 1) return arr;

    var rem = arr.length%size;

    for(var i =0; i < arr.length; i = i+size) {
        arr = reverse(arr,i,i+size-1);
    }

    if(rem != 0) {
        reverse(arr,arr.length-rem,arr.length-1);
    }

    return arr;
}

function reverse(array, start, end) {
    var temp,i,j;

    for(i = start, j = end; i < j && j < array.length; i++, j--) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

var a = [1,2,3,4,5,6];

console.log(rescerBySize(a,2))
