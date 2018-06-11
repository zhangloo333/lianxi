/**
 * Created by lee on 11/18/17.
 */


/**
 * @param {string[]} strs
 * @return {string}

 这里是两层的 loop，
 第一层loop is loop 单个item从头开始选中每个字母来 such as curChar,
 第二层loop is 循环 数组里面每一个item，对照有没有这个这个位置上有没有这个char，
 如果有，去数组里面的下一个item检查，如果么有的情况下，退出prefix，
 退出有两个conditions，
 1. i大于了当前字母的长度
 2. curchar不存在当前的字母里面；
 第二层循环完了以后可以退出 prefix；
 */

var longestCommonPrefix = function(strs) {
    var preFix = "";
    if(!strs) return preFix;

    var lenStrs = strs.length;
    var lenItem = strs[0].length;

    for(var i = 0 ; i < lenItem; i++) {
        curChar = strs[0][i];
        for(var j = 1; j < lenStrs; j++) {
            if(i > strs[j].length || curChar !== strs[j][i]) {
                return preFix;
            }
        }
        preFix += curChar;
    }
    return preFix;
};

const long = (strs) => {
    let prefix = "";
    if(!strs) return prefix;

    const strsLen = strs.length;
    const wordlen = strs[0].length;

    for(let i = 0; i < wordlen; i ++) {
        let curChar = strs[0][i];
        for (let j = 0; j < strsLen; j++) {
            if (i > strs[j].length || strs[j][i] !== curChar) {
                return prefix
            }
        }
        prefix += curChar;
    }
}

const data = ['apple', 'ape', 'april'];


console.log(long(data));