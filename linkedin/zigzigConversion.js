var convertToTitle = function(n) {
    if(n-1 <26){
        return String.fromCharCode((n-1)%26+65);
    }
    var result = "";

    while(n > 0){
        var codeNum = (n-1)%26;
        var c = String.fromCharCode(codeNum+65);
        console.log("c= " + c );
        result = c + result; // 这个控制了前后的位置；原来是现产生 最后一个位数，然后为什么现产生回在 后面的因为你是 把 新产生的数 + 后产生的数

        console.log("result= " + result);


        n = parseInt((n-1) / 26);
    }
    return  result;

};

var a ="BAA";
console.log(convertToTitle(1379));