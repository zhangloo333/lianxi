/**
 * Created by lee on 11/19/17.
 */
var params = getUrlVars('some=params&over=here');
console.log(params);


function getUrlVars(url) {
    var hash;
    var myJson = {};
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        myJson[hash[0]] = hash[1];
    }
    return myJson;
}

//https://stackoverflow.com/questions/8648892/convert-url-parameters-to-a-javascript-object;
JSON.parse('{"' + decodeURI("abc=foo&def=%5Basf%5D&xyz=5".replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')

var search = location.search.substring(1);
search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
        function(key, value) { return key===""?value:decodeURIComponent(value) }):{}