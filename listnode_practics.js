/**
 * Created by lee on 4/17/17.
 */

var Node = function(value) {
    this.value = value;
    this.next = null
}

var LinkList = function() {
    this.head;
    this.last;
    this.keyMap = new Map();
    //console.log(this.last);
}

var l = new LinkList();


LinkList.prototype.add = function(value) {
    var node = new Node(value);
    if(this.last == undefined){
        var dummy = new Node(-1);
        //dummy.next = node;
        //this.head = dummy.next;
        //this.last = this.head;
        this.head = node;
        dummy.next = this.head;
        this.last = this.head;

    } else {
        this.last.next = node;
        this.last = this.last.next;
    }
    this.keyMap.set(value,node);
}

LinkList.prototype.print = function () {
    var tempHead = this.head;

    while(tempHead != null) {
        console.log(tempHead.value);
        tempHead = tempHead.next;
    }
}

LinkList.prototype.reverse = function() {
    var pre = null;
    var cur = this.head;
    this.last = this.head;

    while(cur != null) { //复制和 移动的方向是反向的。

        var temp = cur;
        cur = cur.next;
        temp.next = pre;
        pre = temp;
    }

    this.head = pre;
}

var test = new LinkList();
test.add(1);
test.add(3);
test.add(2);
test.add(4);
test.add(7);

test.print();

test.reverse();
test.print();

console.log(test.head);
console.log(test.last);
console.log(test.keyMap);


//var reverse = function(list) {
//    if(list == null) {
//        return null
//    }
//
//
//    var cur = list.head;
//    var pre = null;
//    list.last = list.head;
//
//    while(cur != null) {
//        var temp = cur.next;
//         cur.next = pre;
//        pre = cur;
//        cur = temp;
//    }
//
//    list.head = pre;
//}
//
//reverse(test);
//test.print();
//console.log(test.head);
//console.log(test.last);