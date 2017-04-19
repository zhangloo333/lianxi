/**
 * Created by leizha on 4/19/17.
 */

var Node = function (value) {
    this.value = value;
    this.next = null;
}

var Linkedlist = function () {
    this.head;
    this.tail;
}

Linkedlist.prototype.add = function (val) {
    var node = new Node(val);
    if(this.head == undefined) {
        var dumy = new Node(-1);
        // dumy.next = node;
        // this.head = dumy.next;

        this.head = node;
        dumy.next = this.head;
        this.tail = this.head;
    } else {
        this.tail.next = node;
        this.tail = this.tail.next;
    }
}

Linkedlist.prototype.print = function () {
    var tempHead = this.head;
    while (tempHead != null) {
        console.log(tempHead);
        tempHead = tempHead.next;
    }
}

Linkedlist.prototype.reverse = function () {
    var cur = this.head;
    var pre = null;

    while(cur != null) {
        var temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }

    this.head = pre;
}

var ll = new Linkedlist();
ll.add(1);
ll.add(3);
ll.add(4);
ll.add(7);
ll.reverse();
ll.print();

