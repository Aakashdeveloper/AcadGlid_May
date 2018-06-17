indexof
filter 
Map
spreedoperator


var a = ["apple","mango","banana"]
var a = ["apple","mango","banana"]
undefined
a.indexOf("apple")
0
a.indexOf("red")
-1

//FilterBy
var ages = [32, 33, 16, 40];

/*function checkAdult(age) {
    return age >= 18;
}*/
var ages = [32, 33, 16, 40];
var checkAdult = (age) => { return ages> 19}

ages.filter(checkAdult)

//ternery
var a = 10
undefined
a>10?"hiii":"bie"
"bie"
a=10?"hiii":"bie"
"hiii"

//map
var a = [6,7, 9 ,5]
function add(num){
    return num +2
}

a.map(add)

//spreed
...

var a = [1,2,3,4];
var b = ["a","b","c"]

c =[...a,...b]