/**
 * Created by leizha on 5/17/17.
 */
function Box(){
    this.a="123";
}
var box1=new Box();
box1.hasOwnProperty("a");    //返回true


function Box(){
    this.a="123";
}
var box1=new Box();
Box.prototype.abc="345"

box1.hasOwnProperty("abc");    //返回false;
"abc" in box1   // 返回true


function box(num){
    if(num<=1){
        return 1;
    }else{
        return num*box(num-1);
    }
}
box(3);

通过arguments.callee来调用函数本身

function box(num){
    if(num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
box(3);


function $(id){
    return document.getElementById(id);
}
Object.prototype.show=function(fn){
    if(fn && fn.constructor==Function){   //判断，有fn和fn是一个函数
        fn();    //直接执行
    }else{
        this.style.display="none";}
}
$("c").onclick=function(){
    this.show(function(){alert()});
}