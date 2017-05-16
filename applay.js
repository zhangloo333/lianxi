/**
 * Created by lee on 4/16/17.
 */


function log() {
    console.log.apply(this,arguments);
}

log('helllo','world');


function addPrefixLog() {
    var arg = Array.prototype.slice.call(arguments);
    arg.unshift("(app)");
    console.log("----" + arg);
    console.log.apply(console, arg);

}

addPrefixLog('helllo','world');
var a = ['zero', 'one', 'two', 'three'];
console.log(a.slice());

//http://reduxblog.herokuapp.com/api/posts


    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() {
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }

            anHttpRequest.open( "GET", aUrl, true );
            anHttpRequest.send( null );
        }
    }


//function httpGet(theUrl)
//{
//    var xmlHttp = new XMLHttpRequest();
//    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//    xmlHttp.send( null );
//    return xmlHttp.responseText;
//}

//console.log(httpGet("http://reduxblog.herokuapp.com/api/posts"));