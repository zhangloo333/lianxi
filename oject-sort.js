/**
 * Created by lee on 10/10/17.
 */

function p(x) {
    console.log(x);
}

var ob = {
    a:1,
    c:2,
    d:12,
    e:43,
    f:3,
    g:2,
}

// var keys = Object.keys(ob).sort(function (a,b) {
//         return ob[a] -ob[b];
// });
//


var objectSort = (obj) => {
    let sortable = [];
    for(e in obj) {
        sortable.push([e,obj[e]]);
    }

    sortable.sort((a,b) => a[1] - b[1]);

    p(sortable);
}

objectSort(ob);