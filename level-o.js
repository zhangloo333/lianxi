/**
 * Created by lee on 10/5/17.
 */
function LevelOrderT(root) {
    var res = [];
    if(!root) return res;

    var queue = [root];

    while(queue.length > 0) {
        var levelSize = queue.length;
        var levelStorage = [];

        for(var i = 0; i < levelSize; i++) {
            var cur = queue.unshift();
            levelStorage.push(cur.data);
            if(cur.left) {
                queue.push(cur.left);
            }
            if(cur.right) {
                queue.push(cur.right);
            }
        }
        res.push(levelStorage);
    }
    return res;
}
