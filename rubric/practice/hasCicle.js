/**
 * Created by lee on 11/2/17.
 */

class Node {
    constructor(value) {
        this.val = value;
        this.next = null
    }
}


var hasCircle = (head) => {
    if(!head) return false;

    let fast = head;
    let slower = head;

    while(fast && fast.next !== null){
        fast = fast.next.next;
        slower = slower.next;
        if(fast === slower){
            return true;
        }

    }
    return false;
}

var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;
// n4.next = n1;

console.log(hasCircle(n2))