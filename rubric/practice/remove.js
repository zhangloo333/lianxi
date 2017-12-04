/**
 * Created by lee on 11/2/17.
 */


var removeLow = (str) => {
    if(!str || str.length == 0) return "";

    let record = {};
    let out = "";
    let min = str.length;

    for(let i = 0; i < str.length; i++) {
        if(record[str[i]]) {
            record[str[i]]++;
        } else {
            record[str[i]] = 1;
        }
    }

    console.log(record);

    for(e in record) {
        console.log(e)
        min = Math.min(min,record[e]);
    }
    console.log(min);


    for(let i = 0; i < str.length; i++) {
        if(record[str[i]] > min) {
            out += str[i];
        }
    }

    return out;
}

var t = 'cccc';
console.log(removeLow(t));