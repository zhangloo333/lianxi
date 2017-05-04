/**
 * Created by leizha on 4/26/17.
 */


function validDecimal (result) {
    return parseInt(result) == result ? true : false;
}

console.log(validDecimal(12))

function ReversePolish(arrNum, arrOper) {
    if(arrOper == null) {
        return arrNum;
    }
    if(arrNum == null) {
        return arrNum.push("error");
    }

    while(arrOper.length != 0) {
        var oprt = arrOper.shift();
        var num1 = parseFloat(arrNum.pop());
        var num2 = parseFloat(arrNum.pop());
        console.log(num1);
        console.log(num2);
        var temp;

        switch(oprt) {
            case "+":
                temp = num1 + num2;
                break;
            case "-":
                temp = num1 - num2;
                break;
            case "x":
                temp = num1 * num2;
                break;
            case "÷":
                temp = num1 / num2;
                break;
            case "%":
                temp = num1 % num2;
                break;
            default:
                break;
        }
        validDecimal(temp) ? temp : temp.toFixed(3);
        console.log('temp= ' + temp);
        arrNum.push(temp + "");
    }

    return arrNum;
}

var a1 = [1,2,3,3,2,1];
var a2 = ["+","x","÷","-","%"];

console.log(ReversePolish(a1,a2));