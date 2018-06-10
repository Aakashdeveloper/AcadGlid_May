if(a%2==0){
    console.log("number is even")
}else if(a%3==0 || a%5 ==0){
    console.log("number is divisble by 3")
}

else{
    console.log("number is odd")
}

if(a%2==0){
    console.log("number is even")
}else if(a%3==0 && a%5 ==0){
    console.log("number is divisble by 3")
}

else{
    console.log("number is odd")
}
======================================================
===============Switch=================================
var a = 10
switch(a>10){
    case 5:
        console.log("i am in first case");
        break;
    case 10:
        console.log("i am in second case");
        break;
    default:
        console.log("i am in defult")
}
====================================================

if(a>10)
    console.log("number is big")
else
    console.log("number is small")