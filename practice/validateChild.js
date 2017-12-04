/**
 * Created by lee on 11/5/17.
 */


function validate(root,className) {
    var out = [];

    function findClass(root,className) {
        if(root.classList && root.classList.contains(className)) {
            out.push(root);
        }
        for(var i = 0; i < root.childNodes;i++){
            findClass(root,className);
        }
    }

    findClass(root,className);
    return out;
}