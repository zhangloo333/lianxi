/**
 * Created by lee on 2/2/18.
 */

function findSubSet(str) {
    let pattern = {};

    for(var i = 0; i < str.length; i++) {
        pattern[str[i]] = pattern[str[i]]+1 || 1;
    }

    return pattern;
}

function num(objs) {
    let sum = 0;
    for(pros in objs) {
        sum += objs[pros];
    }
    return 
}

function validate(str) {
    let pattern = findSubSet('programmer');
    for(let i = 0; i < str.length; i++) {

    }
}

console.log(findSubSet('programmer'));