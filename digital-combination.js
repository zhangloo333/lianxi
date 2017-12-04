/**
 * Created by lee on 10/29/17.
 *
 */

/**
 * @param str
 * @returns {Array}
 */

function letterCombination(str) {
    var output = [];
    if(!str || str.length === 0) return output

    var numberMap = [
        " ",
        "",
        "abc",
        "def",
        "ghi",
        "jki",
        "mno",
        "pgrs",
        "tuv",
        "wxyz",
    ]


    function generator(digi,index,s) {
        if(index === digi.length) {
            output.push(s);
            return;
        }

        var c = digi[index];
        var letters = numberMap[c-'0'];

        for(var i = 0; i < letters.length;i++) {
            generator(digi,index+1,s+letters[i]);
        }
    }
    generator(str,0,"");
    return output;
}

var test = "23";
console.log(letterCombination(test));

/**
 * iteration, 通过一个queue，来每次弹出来第一次的字母，然后每个加上第二次的字母，知道遇到最后一个字母
 * 1 queue = [""], i = 0, quque[0].length = i =0
         [ 'a' ]
         [ 'a', 'b' ]
         [ 'a', 'b', 'c' ]
  2 一次弹出 queue里面的每一个元素，加上 i = 2时的数字
 *
 */


function letterCombination1(str) {
    var output = [""];
    if (!str || str.length === 0) return output
    var numberMap = [
        " ",
        "",
        "abc",
        "def",
        "ghi",
        "jki",
        "mno",
        "pgrs",
        "tuv",
        "wxyz",
    ]


    for(var i = 0; i < str.length; i++) {
        var indexNM = str[i] - '0';
        while(output[0].length === i) {
            var t = output.shift();
            for(var s of numberMap[indexNM]) {
                output.push(t+s);
            }
        }
    }

    return output
}
var test = "23";
console.log(letterCombination1(test));
for(s of 'asdas'){
    console.log(s);
}