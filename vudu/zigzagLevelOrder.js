/**
 * Created by lee on 11/7/17.
 * 在最后一层，推入res的时候：进行下一层的翻转；
 * res.push(list.reverse());
 */

var zigzagLevelOrder = function(root) {
    var res = [];
    if(!root || root.val == null) return [];

    let queue = [];
    var fromLeft = true;
    queue.push(root);

    while(queue.length > 0) {
        var size = queue.length;
        var list = [];

        for(var i = 0; i < size; i++) {
            var cur = queue.shift();
            list.push(cur.val);
            if(cur.left !== null){
                queue.push(cur.left);
            }
            if(cur.right !== null) {
                queue.push(cur.right);
            }
        }
        if(!fromLeft) {
            list = list.reverse();
        }
        fromLeft = !fromLeft;
        res.push(list);
    }
    return res;
};