//..  prefixTree (cont.)
function predictWord(string) {
    var getRemainingTree = function(string, tree) {
        var node = tree;
        while (string) {
            node = node.children[string[0]];
            string = string.substr(1);
        }
        return node;
    };

    var allWords = [];

    var allWordsHelper = function(stringSoFar, tree) {
        for (let k in tree.children) {
            const child = tree.children[k]
            var newString = stringSoFar + child.value;
            if (child.endWord) {
                allWords.push(newString);
            }
            allWordsHelper(newString, child);
        }
    };

    var remainingTree = getRemainingTree(string, this);
    if (remainingTree) {
        allWordsHelper(string, remainingTree);
    }

    return allWords;
}


// end PrefixTree