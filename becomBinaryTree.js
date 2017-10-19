/**
 * Created by lee on 10/18/17.
 */

// binary Tree to Array
var becomeBTree = function (root) {
    var out = [];

    if(root == null) return out;

    var val = root.val;
    var left = becomeBTree(root.left);
    var right = becomeBTree(root.right);

    return left.concat([val],right);
}

var TreeNode = function (val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


var t1 = new TreeNode(8);
var t2 = new TreeNode(3);
var t3 = new TreeNode(10);
var t4 = new TreeNode(1);
var t5 = new TreeNode(6);
var t6 = new TreeNode(14);
var t7 = new TreeNode(4);
var t8 = new TreeNode(7);

t1.left = t2;
t1.right = t3;

t2.left = t4;
t2.right = t5;

t5.left = t7;
t5.right = t8;

t3.right = t6;
/**
 *          8
 *         / \
 *        3   10
 *       / \   \
 *      1  6   14
 *        / \  /
 *       4  7 13
 */

console.log(becomeBTree(t1));

// array to binary search tree;


var binaryArrayToTree = function (arr) {
    if(!arr || arr.length === 0) return null;

    return help(arr,0,arr.length-1);
}

var help = function (arr, left, right) {

    if(left > right) return null;

    var mid = parseInt((left + right)/2);
    var root = new TreeNode(arr[mid]);
    root.left = help(arr,left,mid-1);
    root.right = help(arr,mid+1,right);

    return root;
}

var test = [ 1, 3, 4, 6, 7, 8, 10, 14 ];

/**
 *                          6
 *                         / \
 *                        3   8
 *                       /\   /\
 *                      1  4 7 10
 *                              \
 *                              14
 */


console.log(JSON.stringify(binaryArrayToTree(test)));
