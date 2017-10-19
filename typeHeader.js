/**
 * Created by lee on 10/10/17.
 */

var TypeHeade = function (strs, target) {
    var map = {};

    // for(var i = 0; i < strs.length; i++) {
    //     var len = strs[i].length;
    //     var str = strs[i];
    //
    //     for(var j = 0; j < len; ++j) {
    //         console.log('j',j);
    //         for(var k = j+1; k<= len; ++k) {
    //             var tmp = str.substring(j,k);
    //             console.log(tmp);
    //             if(!map[tmp]) {
    //                 map[tmp] = [str];
    //             } else {
    //                 var index = map[str];
    //                 if(Array.isArray(index)){
    //                     if(str !== index[index.length-1]) {
    //                         index.push(str);
    //                     }
    //                 }
    //
    //             }
    //         }
    //     }
    // }


    strs.forEach(function (str) {
        var len = str.length;
        for(var i = 0; i < len; ++i) {
            for(var j = i + 1; j <= len; ++j) {
                var temp = str.substring(i,j);
                if(!map[temp]){
                    map[temp] = [str];
                } else {
                    var index = map[temp];
                    if(Array.isArray(index) && str !== index[index.length-1]){
                        index.push(str);
                    }
                }
            }
        }
    })

    // console.log(map["Zhang"]);
    return map
    // function search(target) {
    //     if(!map[target]){
    //         return [];
    //     } else {
    //         return map[target];
    //     }
    // }
    //
    // return search(target);
}

var t = ["Jason Zhang","James Yu", "Bob Zhang", "Larry Shi"];

// var ret = TypeHeade(t, "Zhang");
var ret = TypeHeade(t);

console.log(JSON.stringify(ret));

console.log(t[t.length-1]);