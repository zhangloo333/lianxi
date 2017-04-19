/**
 * Created by leizha on 4/14/17.
 */

var Node = function (value) {
    this.value = value;
    this.next = null;
}

var LinkList = function () {
    this.head;
    this.tail;
    this.map = new Map();
}

LinkList.prototype.add = function(val) {
    var node = new Node(val);

    if(this.head == undefined) {
        var dummy = new Node(-1);
        dummy.next = node;
        this.head = dummy.next;
        this.tail = this.head;
    } else {
        if(!this.map.has(node.value)){
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }
    this.map.set(node.value,node.value);

}



LinkList.prototype.print = function () {
    if(this.head == undefined) {
        return -1;
    } // not neccessary

    var tempHead = this.head;

    while (tempHead != null) {
        console.log(tempHead.value);
        tempHead = tempHead.next;
    }
}

LinkList.prototype.reverse = function () {
    var cur = this.head;
    var pre = null;

    // this.map.reverse();

    this.tail = this.head;

    while(cur != null) {
        var temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }

    this.head = pre;
}



var ll = new LinkList();
ll.add(1);
ll.add(2);
ll.add(2);
ll.add(3);
ll.add(3);
ll.add(3);
ll.add(4);

console.log(ll);
ll.print();
console.log('-----');
ll.reverse();
ll.print();

console.log(ll.map);