function a(){
    return 35;
}
console.log(a());
// 35

function a(){
    return 4;
}
console.log(a()+a());
// 8

function a(b){
    return b;
}
console.log(a(2)+a(4));
// 6

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//3     
//9     

function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));
//40

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//4

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log(a(3,10));
//10 3
//30

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//3
//4

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//i=0, i=2, 2
//i=3, i=5, 5
//i=6, i=8, 8
//i=9, i=11, 11

function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));
<div id="copy-toolbar-container" style="cursor: pointer; position: absolute; top: 5px; right: 5px; padding: 0px 3px; background: rgba(224, 224, 224, 0.2); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px; color: rgb(187, 187, 187); border-radius: 0.5em; font-size: 0.8em;"><span id="copy-toolbar">copy</span></div>
//i=0, 0
//i=1, 1
//i=2, 2
//i=3, 3
//i=4, 4
//i=5, 5
//i=6, 6
//i=7, 7
//i=8, 8
//i=9, 9
//i=0, 0
//i=1, 1
//i=2, 2
//i=3, 3
//i=4, 4
//i=5, 5
//i=6, 6
//i=7, 7
//i=8, 8
//i=9, 9
//0

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
       console.log(i);
    }
}
//undefinded

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//undefinded

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//15
//10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//15
//15