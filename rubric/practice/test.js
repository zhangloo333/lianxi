/**
 * Created by lee on 11/8/17.
 */
var endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
];

// // Result
// [
//     { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//     { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
//     { skill: 'html', user: [ 'Sue' ], count: 1 }
// ];
//
// store{
//     "css": {}:{ skill: 'css', user: ['Bill' ], count: 1 },
//     "javascript" {}
// }

function combination(arr) {
    var store = {};
    var res = [];

    for(var i = 0; i < arr.length; i++) {
        if(!store[arr[i].skill]){
            var users = [arr[i].user];
            store[arr[i].skill] = {
                skill: arr[i].skill,
                user: users,
                count: 1,
            }
        } else{
            // if(store[arr[i].skill]) {
            //
            //     console.log(store[arr[i].skill]["user"].push(arr[i].user))
            // }
                store[arr[i].skill]["user"].push(arr[i].user);
                store[arr[i].skill]["count"]++;
        }
    }

    for(e in store) {
        res.push(store[e]);
    }

    return res.sort(function(a,b){
    return b.count - a.count;
});
}

// res.sort(function(a,b){
//     return a.count - b.count;
// })


console.log(combination(endorsements));