/**
 * Created by lee on 11/18/17.
 */


const LESS_THAN_20 = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"]
const TENS = ["","TEN","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty", "Ninety"];
const THOUSANDS = ["","Thousand","Million","Billion"];


var numberToWords = function (nums) {

    if(nums === 0) return "zero";
    var resWords = "";
    var i = 0;

    while(nums > 0) {
        if(nums%1000 !== 0) {

            console.log("nums%100 = ",nums%100, " THOUSANDS[i]= ", THOUSANDS[i]);
            console.log(" resWordsBefore", resWords);

            resWords = helper(nums%1000) + THOUSANDS[i] + " " + resWords;
        }
         console.log("resWordsAfter", resWords);

        console.log("newNumber = ", nums/1000);

        nums = parseInt(nums/1000);

        i++;

    }

    return resWords;
}

var helper = function (num) {
    console.log('insidehelper----------------', "nums = ",num);

    if(num === 0) {
        return "";
    } else if (num < 20) {
       console.log("LESS_THAN_20[num] = ", LESS_THAN_20[num]);

        return LESS_THAN_20[num] + " ";
    } else if(num <100) {
        console.log("TENS[parseInt(num/10)] = ", parseInt(num/10), "helper(num%10)", num%10);

        return TENS[parseInt(num/10)] + " " +helper(num%10);
    } else {

       console.log("LESS_THAN_20[parseInt(num /100)] = ", parseInt(num /100), "helper(num%10)", num%100);

        return LESS_THAN_20[parseInt(num /100)] + " Hundred " + helper(num % 100);
    }
}

console.log(numberToWords(123))

var a = [1,2,3,4,5,6];
console.log(a.slice(1,4));