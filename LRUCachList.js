/**
 * Created by leizha on 4/18/17.
 */

var Node = function (key,value) {
    this.key = key;
    this.value = value;
    this.prev;
    this.next;
}

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.keyMap = new Map();
    this.node = new Node();
    this.head = new Node(null,null);
    this.tail = new Node(null,null);
    this.head.prev = this.tail;
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.tail.next = this.head;
}

LRUCache.prototype.put= function(key,value) {
    var node = new Node(key,value);
    if(keyMap.has(key)){
        node.value = value;
        this.detach(node);
        this.attach(node);

    }else {
        if(this.keyMap.size == this.capacity) {
            this.keyMap.delete(this.head.next.key);
            this.detach(this.head.next);
        }
    }
}

LRUCache.prototype.get = function (key) {
    var node = this.keyMap.get(key);
    if(node != null) {
        this.detach(node);
        this.attach(node);
    }

    return node = null ? node.value;
}

LRUCache.prototype.attach = function (node) {
    if(typeof node == Node) {
        node.next = this.tail;
        node.prev = this.tail.prev;

        this.tail.prev.next = node;
        this.prev = node;
    }

}

LRUCache.prototype.detach = function (node) {
    if(typeof node == Node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.prev = null;
        node.next = null;
    }
}

var a = new LRUCache();
a.attach()