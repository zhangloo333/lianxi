

function binarySearch(arr, target) {
    if(arr == null || arr == undefined || arr.length == 0) {
        return -1;
    }

    arr.sort(function (a,b) {
        return a-b;
    });

    var Lboundar = 0;
    var Rboundar = arr.length-1;

    while(Lboundar <= Rboundar) {
        var mid = parseInt((Rboundar + Lboundar)/2);
        if(arr[mid] === target) {
            return true;
        } else if(arr[mid] < target) {
            Lboundar = mid + 1;
        } else {
            Rboundar = mid - 1;
        }
    }
    return false;
}