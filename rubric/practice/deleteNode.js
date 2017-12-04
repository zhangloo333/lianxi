/**
 * Created by lee on 11/2/17.
 */

class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

var deleteNode = (node)=> {
    let temp = node.next;
    node.val = temp.val;
    node.next = temp.next;
    temp = null
}


var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);
var n5 = new Node(5);
var n6 = new Node(6);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;


function print(node) {
    while(node != null) {
        console.log(node.val);
        node = node.next;
    }
}

print(n1);
deleteNode(n2);
console.log('--------');
print(n1);