/**
 * Created by lee on 9/28/17.
 */


var solution = function (str1, str2) {
    if((str1 && str1.length == 0) || (str2 && str2.length == 0)){
        return "";
    }

    var out;
    var temp = "";
    var max = 0;

    for(var i = 0; i < str1.length; i++) {
        var prt1 = i;
        for(var j = 0; j < str2.length; j++) {
            if(str1[prt1] == str2[j]){
                prt1++;
                temp += str1[j];
                console.log(temp);
            } else {
                if(max < temp.length) {
                    max = temp.length;
                    out = temp;
                }
                // compare[temp.length] = temp;
                temp ="";
            }
            // console.log('i=',i,'prt1=',prt1,'j=',j,compare);
        }
        console.log('--------');
    }
    // console.log(compare);

    // var max = Object.keys(compare).sort(function (a,b) {
    //     return b-a;
    // })
    // return compare[max[0]];

    return out;
}


console.log(solution("abbcc", "dbbcc"));


/*
* if(str1[prt1] == str2[j]){
 if(j == str2.length && prt1 !== i) {
 compare[prt1-i] = str1.substring(i,prt1);
 console.log(compare);
 }
 prt1++;
 console.log('prt1=',prt1, 'i=',i, 'j=', j);

 } else{
 console.log('enter1');
 if(prt1 !== i){
 console.log('enter2');
 compare[prt1-i] = str1.substring(i,prt1);
 console.log("i,ptr", i, prt1);

 }
 }
 console.log('----------------');
* */