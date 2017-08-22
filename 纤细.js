/**
 * Created by lee on 8/3/17.
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0;

    var header = 0;
    var tail = 0;
    var maxleng = 0;
    var setTable = new Set();

    while(header < s.length && tail < s.length) {
        if(!setTable.has(s[tail])) {
            setTable.add(s[tail]);
            tail++;
        } else {
            setTable.delete(s[header]);
            header++;
        }
        console.log('set',setTable);
        maxleng = Math.max(maxleng,setTable.size);
        console.log('maxleng',maxleng);

    }

    return maxleng

};

console.log(lengthOfLongestSubstring("bbbbb"));