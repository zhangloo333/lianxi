// two pivot的方法来做；
function sortcolor(arr){
    if(!arr ||arr.length === 0) return [];

    let wall1 = 0;
    let wall2 = arr.length-1;
    let cur = 0;

    while(cur <= wall2) {
        if(arr[cur] == 0) {
            swape(arr,cur++,wall1++);
        } else if(arr[cur] == 2) {
            swape(arr,cur,wall2--);
        } else {
            cur++;
        }
    }

    return arr

}

function swape(array,pos1,pos2) {
    if(array[pos1] != array[pos2]){
        var temp = array[pos1];
        array[pos1] = array[pos2];sortcolor
        array[pos2] = temp;
    }
}

var testing = [0,2,0,1,0,2,0,1,2,0];

console.log(sortcolor(testing));
