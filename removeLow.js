function Node(name) {
    this.name = name;
    this.childNodes = [];
}


function List() {
    this.map = {};
    this.root = new Node('CTO');
}

List.prototype.add = function (name,parent) {
    if(!this.root) {
        this.map[name] = new Node(name);
        this.childNodes
    }
}


var map = new Map();
map.set("1",2);
map.set("2",3);
map.set("4",5);
map.set("6",7);
map.set("9",10);

// console.log(map);

for(var [key,value] of map){
    console.log(key,'=>',value);

}

console.log("categrory".indexOf("cte"))