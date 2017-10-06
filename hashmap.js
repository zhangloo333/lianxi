/**
 * Created by lee on 9/27/17.
 */


function iterate(map) {
    if(map instanceof Map && map != null) {
        var mapIter = myMap.entries();
        while(mapIter.next().value != undefined){
            console.log(mapIter.next());
        }
    }
}

var myMap = new Map();
myMap.set('a',1);
myMap.set('b', 'c');
myMap.set('c', 5);

var a = new Map();

console.log(iterate(myMap));