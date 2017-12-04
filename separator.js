/**
 * Created by lee on 10/30/17.
 */



let evenSeparator = (number = 0, separator = '-') => {
    /* code here */
    const newNumber = number.toString().split("").map(e=>parseInt(e));
    let out = "";

    for(var i = 0 ; i < newNumber.length; i++) {
        if(newNumber[i]%2 === 0 && newNumber[i +1]%2 ===0) {
            out += newNumber[i] + separator;
        } else {
            out += newNumber[i];
        }
    }
    return out;
}

console.log(evenSeparator(3223));