------------------------------------------Es5----------------------------
//Function
function add(a,b){
    return a+b
}

//method
var add = function(a,b){
    return a+b
}

add(3,5)

function isEven(a){
    if(a%2==0){
        console.log("number is even")
    }else{
        console.log("number is odd")
    }
}
//-----------------------------------------Es6----------------------------


var add = (a,b) => {
    return a+b
}


var sum = add(4,5)
console.log(sum)

9
let b = 10
/*VM201:1 Uncaught SyntaxError: Identifier 'b' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM201:1*/
let z = 10
undefined
z
10
let z = 11
/*VM208:1 Uncaught SyntaxError: Identifier 'z' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM208:1*/
const y = 10
undefined
y
10
const y = 11


//////////////////////////////////////////////////////
var a = "javascript"
console.log(a)

function loop(){
    console.log("hiiiiii")
}

var a = "react"
undefined
var b = a+"react is lib"
undefined
b
"reactreact is lib"
var a = "react"
undefined
var b = a+" is lib"
undefined
b
"react is lib"
`${a} is lib`
"react is lib"
new Date()
//Sat Jun 16 2018 09:44:31 GMT+0530 (India Standard Time)

var a = 10
function tight1(){
    a = "aakash"
    return a
}


for(i=0;i<10;i++){
    let name3= 10
}