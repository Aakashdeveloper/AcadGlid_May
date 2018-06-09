string  ="aakash"
number =10
boolean=true/false
null
undefined

Es5 =====> Es6  ==>Es8
Es5

var a = 10
var b = "acadgild"
var c = true
========================================================
var a = 10
undefined
a
10
var b = "acadgild"
undefined
b
"acadgild"
var c = true
undefined
c
true
var d = "10"
undefined
typeof(d)
"string"
typeof(c)
"boolean"
var b = "acadgild"
undefined
typeof(b)
"string"
var a = 10
undefined
typeof(a)
"number"
==================================================================
>>>>>>>>>>>>>>>>>>>String Operations>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var a = "java"
var b = 'script'
a+b
"javascript"


var a = "tesnor"
var b = "flow"
a+b
"tesnorflow"
a-b
NaN
a*b
NaN
a/b
NaN


var a = "i am using tensorflow for AI"

a.length
28
a.toUpperCase()
"I AM USING TENSORFLOW FOR AI"
a
"i am using tensorflow for AI"
var b = a.toUpperCase()

b
"I AM USING TENSORFLOW FOR AI"
var c = a.toLowerCase()
c
"i am using tensorflow for ai"

var d = a.replace("tenserflow","NLP")
undefined
d
"i am using tensorflow for AI"
a
"i am using tensorflow for AI"
var d = a.replace("tensorflow", "NLP")
undefined
d
"i am using NLP for AI"

var a = "i am using tensorflow for AI"
undefined
var b = "i am using NLP for ML"
undefined
a+b
"i am using tensorflow for AIi am using NLP for ML"
a.concat(b)
"i am using tensorflow for AIi am using NLP for ML"
b.concat(a)
"i am using NLP for MLi am using tensorflow for AI"
a.concat(" ",b)
"i am using tensorflow for AI i am using NLP for ML"
var e = a.concat(" ",b)
undefined
e
"i am using tensorflow for AI i am using NLP for ML"
a.charAt(0)
"i"
a.slice(1)
" am using tensorflow for AI"
e.charAt(0).toUpperCase()+e.slice(1)
"I am using tensorflow for AI i am using NLP for ML"

var a i
VM339:1 Uncaught SyntaxError: Unexpected identifier
var a_i
undefined
var a.i
VM344:1 Uncaught SyntaxError: Unexpected token .
var a-i
VM345:1 Uncaught SyntaxError: Unexpected token -
var A
undefined
var 10
VM350:1 Uncaught SyntaxError: Unexpected number
var a/i
VM351:1 Uncaught SyntaxError: Unexpected token /

var ai = "i am using tensorflow for AI i am using NLP for ML"
undefined
ai.split(" ")
(12) ["i", "am", "using", "tensorflow", "for", "AI", "i", "am", "using", "NLP", "for", "ML"]
ai.reverse()
VM365:1 Uncaught TypeError: ai.reverse is not a function
    at <anonymous>:1:4
(anonymous) @ VM365:1
ai.split("")
(50) ["i", " ", "a", "m", " ", "u", "s", "i", "n", "g", " ", "t", "e", "n", "s", "o", "r", "f", "l", "o", "w", " ", "f", "o", "r", " ", "A", "I", " ", "i", " ", "a", "m", " ", "u", "s", "i", "n", "g", " ", "N", "L", "P", " ", "f", "o", "r", " ", "M", "L"]
var ai = "i am using tensorflow for AI i am using NLP for ML"
undefined
ai.indexOf("tensorflow")
11
ai.indexOf("aakash")
-1
var ai = "i am using tensorflow for AI i am using NLP for ML"
undefined
ai.slice(5,10)
"using"
ai.slice(5,20)
"using tensorflo"
var d = ai.slice(1)
undefined
d
" am using tensorflow for AI i am using NLP for ML"
var d = ai.slice(5,10)
undefined
d
"using"
var url ="https://acadgild.zoom.us/s/576280561?status=success"
undefined
url.split("/")
(5) ["https:", "", "acadgild.zoom.us", "s", "576280561?status=success"]