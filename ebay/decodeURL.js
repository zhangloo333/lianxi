/**
 * Created by lee on 11/18/17.
 */

//方法1：
var search = "abc=foo&def=%5Basf%5D&xyz=5";

console.log(decodeURI(search));

var c = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

console.log(c)

//方法2

function getUrl