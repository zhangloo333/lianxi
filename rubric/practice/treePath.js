/**
 * Created by lee on 11/7/17.
 */
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function treeTargetPath(root,target) {

    if(root == null) {
        return [];
    }
    if(root.val == target) {return [root.val]};

    var left = treeTargetPath(root.left,target);
    var right = treeTargetPath(root.right,target);

    if(left.length > 0 || right.length > 0) return left.concat(right,[root.val]);

    return [];
}

var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);
var n5 = new Node(5);
var n6 = new Node(6);
var n7 = new Node(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

console.log(treeTargetPath(n1,5)) //[ 5, 2, 1 ]
