/**
 * Created by lee on 8/28/17.
 *
 *  给出一个键盘上的字，给出一个 数字型的字符串，输出可能的所有 代表的字母型字符串；
 *  给出

 Input:Digit string "23"
 Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

 */


var letterCombinations = function(digits) {
    var letterMap = [
        " ",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ]
    var output = [];

    function findCombination(digi,index,s) {
        console.log(index,":",s);
        if(index == digi.length){
            output.push(s);
            console.log("get", s, ", return ");
            return;
        }

        var c = digi[index];
        var letters = letterMap[c-'0'];
        for(var i = 0; i < letters.length;i++) {
            console.log("digits[", index, "] = ", c,", use", letters[i]);
            findCombination(digi,index+1,s+letters[i]);
        }
    }

    if(!digits) return output;
    findCombination(digits,0,'');
    return output;

}

console.log(letterCombinations("23"));

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



    for(var i =0; i < str.length; i++) {
        var nmIndex = str[i] - '0';
        console.log("nmIndex", nmIndex);
        while(output[0].length == i){
            console.log("outputLast=",output[output.length-1]," LEN= ", output[output.length-1].length)
            var t = output.shift();
            console.log('t=',t);
            for(s of numberMap[nmIndex]) {
                output.push(t+s);
                console.log(output);
            }
        }
    }

    return output;
}
var test = "23";
console.log(letterCombination1(test));