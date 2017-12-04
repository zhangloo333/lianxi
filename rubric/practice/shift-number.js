/**
 * Created by lee on 11/3/17.
 */
function sayHello() {
    console.log('Hello, World');
}


function validate(str1,str2) {
    if(!str1 || !str2 || str1.length !== str2.length) return false;
    if(str1 == "" && str2 == "") return false;

    let constCode = ((str1[0] - str2[0])+26)%26;//


    for(var i= 1 ; i < str1.length; i++){
        if(((str1[i]-str2[i])+26)%26 !== constCode){
            return false;
        }
    }
    return true;
}


console.log((25+26)%26)