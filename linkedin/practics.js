/**
 * Created by lee on 11/19/17.
 */


const LESS_20 = ["", "One", "Two", "Three", "Four","Five","Six","Seven","Eight","Nine","Ten",
    "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen", "Seventeen", "Eighteen", "Nineteen"
]
const TENS = ["","Ten", "Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"]

const THOUSANDS = ["", "Thousand", "Million", "Billion"];

var numerToWord = function (nums) {
    if(nums === 0) return "zero";

    var resWords = "";
    var i = 0;

    while (nums > 0) {
        if(nums%1000 !== 0) {
            resWords = helper(nums%1000) + THOUSANDS[i] + " " + resWords;
        }
        nums = parseInt(nums/1000); // 取超过1000的数；
        i++;
    }
    return resWords;
}

var helper = function (num) {
    if(num == 0) return "";
    else if(num < 20) {
        return LESS_20[num] + " ";
    } else if(num < 100) {
        return TENS[parseInt(num/10)] + " " + helper(num%10);
    } else {
        return LESS_20[parseInt(num/100)]+ " Hundred " + helper(num%100);
    }
}

console.log(numerToWord(1233333))
