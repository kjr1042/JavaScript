// Types of Operators
// 1.Arthmetic Operators : + , - , * , / , % , ** , ++ , --
// 2. Assignment Operators : = , += , -= , *= , /= , %= , **=
// 3.Comparsion Operators : < , > , >= , <= , == , != 
// 4. Logical Operators : && , || , !(not)

// 1.Arthmetic Operators : + , - , * , / , % , ** , ++ , --
var a= 100
var b=50 
console.log(a+b) // 150
console.log(a-b) // 50 
console.log(a*b) // 5000
console.log(a/b) // 2
console.log(a%b) // 0
console.log(a**b) // 1e+100
//Post increment 
a++
console.log(a) // 101
// pre increment
++a 
console.log(a) // 102

//Post decrement 
b--
console.log(b) // 49
// pre increment
--b 
console.log(b) // 48



// 2. Assignment Operators : = , += , -= , *= , /= , %= , **=
var x = 20
var y = 10
x +=y
console.log(x) // 30

x -=y
console.log(x) // 20

x *=y
console.log(x) // 200

x /=y
console.log(x) //20

x %=y
console.log(x) // 0

x **=y
console.log(x) // 0



// 3.Comparsion Operators : < , > , >= , <= , == , != 
var m = 5
var n = 4 
console.log(m<n)   // false
console.log(m>n)   // true 
console.log(m<=n)  // false 
console.log(m>=n)  // true
console.log(m==n)  // false
console.log(m!=n)  // true



// 4. Logical Operators : && , || , !(not) 
var p = 4 
var q = 6
var res1 = p>q
var res2 = q>p
console.log(res1&&res2)  // false 
console.log(res1||res2)  // true
console.log(!res1)       //true