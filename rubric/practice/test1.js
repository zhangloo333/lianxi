/**
 * Created by lee on 11/2/17.
 */
/**
 * Created by lee on 9/27/17.
 */

/**
 * @param {str}
 * @returns {string}
 */





function solution(str) {
    if(!str || str.length == 0) return "";

    let record = {};
    let min = str.length;
    let res ="";
    for(let i = 0; i < str.length; i++) {
        if(record.hasOwnProperty(str[i])) {
            record[str[i]]++;
        } else {
            record[str[i]] = 1;
        }
    }

    for(e in record) {
        if(min > record[e]){
            min = record[e];
        }
    }

    for(let i = 0; i < str.length; i++) {
        if(record[str[i]] > min){
            res += str[i];
        }
    }

    return res;
}


var a = "abcabcs";
// var a = "cccccc";
console.log('this is out', solution(a));