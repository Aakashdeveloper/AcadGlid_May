var color = []

var color =["red","yellow","green"]
var marks = [10,56,98,45,90]
var istrue=[true,false,false,false,true]

var myArray=[10,4,5,"fdb","vdf",true,4,"df"]

var a = [1,3,5,7,9]
undefined
a.length
5
a[5]
undefined
a[4]
9
a[0]
1
a[3]
7
a.push("javascript")
6
a
(6) [1, 3, 5, 7, 9, "javascript"]
a.push(true)
7
a
(7) [1, 3, 5, 7, 9, "javascript", true]
a.pop(5)
true
a
(6) [1, 3, 5, 7, 9, "javascript"]
a.pop()
"javascript"
a.pop(50)
9

var myArray=[10,4,5,"fdb","vdf",true,4,"df"]
undefined
myArray
(8) [10, 4, 5, "fdb", "vdf", true, 4, "df"]
myArray.shift(6)
10
myArray
(7) [4, 5, "fdb", "vdf", true, 4, "df"]
myArray.unshift(6)
8
a
(4) [1, 3, 5, 7]
myArray
(8) [6, 4, 5, "fdb", "vdf", true, 4, "df"]



push => add in the end of Array
pop=> always take out from the end
shift=> take out from front
unshift=> add in front


var myArray=[10,4,5,"fdb","vdf",true,4,"df"]
undefined
myArray.slice(1)
(7) [4, 5, "fdb", "vdf", true, 4, "df"]
myArray.slice(3,6)
(3) ["fdb", "vdf", true]
myArray.splice(2,0,"apple","mango")
[]
myArray
(10) [10, 4, "apple", "mango", 5, "fdb", "vdf", true, 4, "df"]
myArray.splice(4,1,"bmw","audi")
[5]
a
(4) [1, 3, 5, 7]
myArray
(11) [10, 4, "apple", "mango", "bmw", "audi", "fdb", "vdf", true, 4, "df"]



==========================================
For Loop
============================
for(i=0;i<10;i++){
    console.log(i)
}
VM435:2 0
VM435:2 1
VM435:2 2
VM435:2 3
VM435:2 4
VM435:2 5
VM435:2 6
VM435:2 7
VM435:2 8
VM435:2 9
undefined
var  a = [10, 4, "apple", "mango", "bmw", "audi", "fdb", "vdf", true, 4, "df"]
undefined
for(i=0;i<a.length;i++){
    console.log(a[i])
}
VM446:2 10
VM446:2 4
VM446:2 apple
VM446:2 mango
VM446:2 bmw
VM446:2 audi
VM446:2 fdb
VM446:2 vdf
VM446:2 true
VM446:2 4
VM446:2 df
///////////////////////////////////////////////
we need to have array of names
we will verify the user from array and print "allow access"

if that user is not the part of array add user to array and print all user