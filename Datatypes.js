//primitive Datatypes

// 1.number datatype
var a= 20 
console.log(a)
console.log(typeof(a))
//for real number
var b= 20.9
console.log(b)
console.log(typeof(b))
// what if length is more 
var c= 200000000000
console.log(c)
console.log(typeof(c))

// 2.String Datatype
var str ="JavaScript"
console.log(str)
console.log(typeof(str))
// check for single quotes
var str1 ='JavaScript'
console.log(str1)
console.log(typeof(str1))
// check for single character
var str2 ="J"
console.log(str2)
console.log(typeof(str2))
//check for single quote
var str3 ='k'
console.log(str3)
console.log(typeof(str3))

// 3.Boolean Datatype
var b=true
console.log(b)
console.log(typeof(b))

var b1=false
console.log(b1)
console.log(typeof(b1))


//Trivial Datatypes 

// 1. Null datatype
var n =null
console.log(n)
console.log(typeof(n)) // type : object

//2.undefined datatype 
var x ;
console.log(x)
console.log(typeof(x))



// Non-Primitive Datatypes

// 1. Array Datatype
var arr =[1,2,3,4,5]
console.log(arr)
console.log(typeof(arr)) // type : object && [[Prototype]] : Array(0)

// check for heterogenous Data
var arr1 =[1,'ram',true,null]
console.log(arr1)
console.log(typeof(arr1))   // type : object && [[Prototype]] : Array(0)

//2.object Datatype {JSON}
var obj ={
    fname :"ram",
    lname :"pothu",
    age:20
}
console.log(obj)
console.log(obj.age)
console.log(obj.fname)
console.log(obj.lname)
console.log(typeof(obj))
