/**
 * Created by leizha on 7/13/17.
 *
 * 解题思路：
 * 首先要把： string 都转换成小写字母；
 *
 * 先之一张表 统计一下有 多少个重复的，
 * 然后遍历 string 找出那个第一次出现的重复的。
 *
 */




function findRepeat(str) {
    if(str.length < 2) return "cannot foud";

    var set = new Set();
    var strArray = str.split("");
    var result;
    console.log(strArray);

    for(var i = 0; i < strArray.length; i++) {
        if(strArray[i] !== " ") {
                    if (set.has(strArray[i])){
                        return strArray[i];
                    }
                    else {
                        set.add(strArray[i]);
                    }
                }
    }
    return "cannot found";
}


function findNonRepaeat(str) {
    if(str.length < 0) return "cannot foud";

    str = str.toLowerCase();
    var count = new Map();

    //制表
    for(var i = 0; i < str.length; i++) {
        var temp = str.charAt(i);
        if(count.has(temp)) {
            count.set(temp,count.get(temp)+1);
        } else {
            count.set(temp,0);
        }
    }


    // 查询
    for(var i = 0; i < str.length; i++){
        var temp1 = str.charAt(i);
        if(count.get(temp1) == 0) return temp1;
    }

    return "cannot foud"

}

var ex = "Salesforce is the best company to work for"
// console.log(findRepeat(ex));
console.log(findNonRepaeat(ex));