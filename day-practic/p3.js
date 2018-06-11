
function TireNode()

insert(word) {
    let treeroot = this.root;
    let cur ="";

    for(let i =0; i< word.length; i++) {
        cur = word[i];

        if(!treeroot.children[cur]) {
            treeroot.children[cur] = new TireNode(cur);
        }

        treeroot = treeroot.children[cur];
    }

    treeroot.isWord = true;
}

findlastNode() {
    let rootnode = this.root;

    while(words.length > 0) {
        if(rootnode.children[word[0]]) {
            rootnode = rootnode.children[word[0];
            word = word.substr(1);
        }
    }

}