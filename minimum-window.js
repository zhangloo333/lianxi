/**
 * Created by lee on 10/4/17.
 */

/** 这个是n^2的写法， 固定一个 i, 然后在i后面 找到相应的子串，在进行遍历，寻找符合条件的东西；
 *  1. 采集里面有多少个 t = map的对应频率表；
 *  2. for{while{}} 固定一个头，寻找头后面的子串；
 *      2.1 每次循环的还是都要，让 counter 和 map 复位；
 *      2.2 如果 map 依然存在 循环的变量， 从 map 减去；
 *      2.3 直到发现 counter 为 0 的情况下，我们记录一个 当时的长度，才更新global的min；break while
 *      2.4 j++；来扫描下一个
 * @param ss
 * @param t
 * @returns {Array}
 */

function minWindow(ss,t) {
    if (!ss || !t || ss.length == 0 || t.length == 0 || t.length > ss.length) {
        return [];
    }

    var counter = t.length;
    var min = ss.length;
    var map1 = {};
    var subString;


    for (var i = 0; i < t.length; i++) {
        map1[t[i]] = (map1[t[i]] + 1) || 1;
    }

    // console.log(map1);

    for (var i = 0; i < ss.length; i++) {
        // 进行一个循环 都需要 复位一次
        var map = Object.assign({},map1);
        counter = t.length;

        // console.log("--------",map);

        // 如果这个扫描的字符串，不包含在这个逻辑里面，进入for的下一次循环，如果在的话，进行子串的分析；
        if (map[ss[i]]) {

            var j = i + 1;
            counter--;
            map[ss[i]]--;

            //首先把外层函数遇到的map参数 减去 counter--；


            // console.log('i=',i,"j",j,"counter",counter,"map",map);

            // 遍历 i之后的子串，直到counter 见到0 找到所有符合条件的子串；
            while (j < ss.length) {
                if (map[ss[j]] > 0) {
                    counter--;
                    map[ss[j]]--;
                // console.log('i=',i,"j",j,"counter",counter,"map",map);

                }
                // 找到符合条件的子串，然后我们取 最小值 和 相应的 substring
                if(counter == 0) {
                    min = Math.min(min,j-i+1);
                    subString = ss.substring(i,j+1);
                    break;
                }
                //继续向前走
                j++;
            }
        }

    }

    console.log(min);
    console.log(subString);
}

/**
 * 1. move end pointer 找到 match的字符串；
 *
 * 2. move start pointer
 *  2.1每次都更新一下 global min，
 * 直到remove掉一个match
 *
 *
 *
 * */


function minWindow1(ss,t) {
    if(ss || t == null || ss.length == 0 || t.length == 0 || t.length > ss.length) {
        return [];
    }

    var counter = t.length; // count是match 的标准
    var left = 0;
    var right = 0;
    var minLen = ss.length + 1;
    var startIndex = -1;

    var myMap = {};

    // put all characters of t into map
    for(var i = 0; i < t.length; i++){
        myMap[t[i]] = (myMap[t[i]] + 1) || 1;
    }
    // find the match in map

    while(right < ss.length){
        var freq = myMap[ss[right]];

        if(freq != undefined) {
            myMap[ss[right]]--;
            if(freq > 0){
                counter--;
            }
        }

        right++;
        // 发现counter 减到 0 的时候；需要更新global min

        while(counter == 0){

            // 截取global 的min
            if(right-left < minLen){
                minLen = right -left;
                startIndex = left;
            }

            // 去除start的频率，如果undefined left++；如果有 让计数器 增加。
            var exist = myMap[ss[left]];

            if(exist != undefined) {
                myMap[ss[left]]++;

                if(exist == 0){
                    counter++
                }
            }

            left++;
        }

    }
    return minLen == ss.length+1 ? []: ss.substr(startIndex,minLen);

}

var S = "ADOBECODEBANC";
var T = "ABC";

minWindow(S,T)
console.log(minWindow1(S,T));