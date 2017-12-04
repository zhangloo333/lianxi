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
            store[arr[i].skill][user].push(arr[i].user);
            store[arr[i].skill][count]++;
        }
    }

    for(e in store) {
        res.push(store[e]);
    }

    return res;
}