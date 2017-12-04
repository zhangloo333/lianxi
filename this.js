/**
 * Created by lee on 10/31/17.
 */


function This() {
    this.string = "";
    this.arr = ['one', 'two', 'three'];
    var temp =""
    // this.arr.forEach(function (e) {
    //     this.string += e;
    //     // temp += e;
    // },this)
    this.arr.forEach((e)=>{
        this.string +=e;
    })

    // this.string = temp;

    console.log(this.string);
}

new This();