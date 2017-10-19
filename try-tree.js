/**
 * Created by lee on 10/10/17.
 */
var TrieNode = function(key) {
    return {
        key: key,
        isWord: false,
        children: {}
    }
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    var tree = this.root;
    var i, curr;

    for(i = 0; i < word.length; i++) {
        curr = word[i];
        if(!tree.children[curr]) {
            tree.children[curr] = TrieNode(curr);
        }
        tree = tree.children[curr];
    }

    tree.isWord = true;
};


var trie = new Trie();
trie.insert("somestring");