//document.write("Lets start with scope Of Variables")
{
    var a=10
    console.log(a)
}
a=11
console.log(a)

//let Keyword 
{
    let b=12
    console.log(b)
}
//console.log(b) //Uncaught ReferenceError: b is not defined

// const keyword
{
    const c=15
    console.log(c)
}
console.log(c) //variable.js:21 Uncaught ReferenceError: c is not defined
