/**
 * Created by leizha on 5/17/17.
 */


var moverleft = function (elem,distance) {
    var left = 0;

    function fame() {
        left++;
        elem.style.left = left +'px';

        if(left == distance) {
            clearInterval(timeID);
        }
    }

    var timeID = setInterval(fame,1000)

}