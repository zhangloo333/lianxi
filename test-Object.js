/**
 * Created by lee on 12/9/17.
 */

const a = {
    name:function(){
      return this.age
    },
    age: 63
}

console.log(a.name())

function ac() {
    console.log(this);
}

ac();

const foo = [1, 2, 3];
