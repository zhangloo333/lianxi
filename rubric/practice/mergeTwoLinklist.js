/**
 * Created by lee on 11/2/17.
 *
 * 记住 小于号；
 */


class Node {
    constructor(value) {
        this.val = value;
        this.next = null
    }
}

var mergerTwo = (l1,l2) => {
    let dummy = new Node(-1);
    let runner = dummy;

    while(l1 && l2 && l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            runner.next = l1;
            l1 = l1.next;
        } else {
            runner.next = l2;
            l2 = l2.next;
        }
        runner = runner.next;
    }

    if(l1 && l1.val != undefined) {
        runner.next = l1;
    } else if(l2 && l2.val != undefined) {
        runner.next = l2;
    }

    return dummy.next || null;
}


var mergerTwo = (l1,l2) => {
    let dumm

}

var n1 = new Node(1);
var n2 = new Node(9);
var n3 = new Node(13);
var n4 = new Node(14);

n1.next = n2;
n2.next = n3;
n3.next = n4;


var n6 = new Node(5);
var n7 = new Node(7);
var n8 = new Node(12);
var n9 = new Node(20);

n6.next = n7;
n7.next = n8;
n8.next = n9;

function print(node) {
    while(node != null) {
        console.log(node.val);
        node = node.next;
    }
}

print(n1);
console.log('------');
print(n6);
console.log('------');

print(mergerTwo(n1,n6));



