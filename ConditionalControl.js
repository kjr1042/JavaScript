// if - Else
// if(condition)
// {
//     // block of code
// }
// else if(condition)
// {
//     //block of code
// }
// else
// {
//     // block of code
// }
// switch Case 
var a= "black"
switch(a)
{
    case "red" :
        console.log("red color is chosen")
        break
    case "blue" :
        console.log("blue color is chosen")
        break
    case "green":
        console.log("green color is chosen")
        break
    case "black":
        console.log("black color is chosen")
        break   
    default:
        console.log("pink color is chosen")
}

// while loop 
var count =1 
while(count<=5)
{
    console.log(count)
    count++
}

// do-while 
// do
// {
//     var count =0
//     console.log(count)
//     count++
// } while(count<5)

// for loop 
for(var i=6;i<=10;i++)
{
    console.log(i)
}
// for - Of loop // used for iterable objects
var ar =[1,2,3,4,5]
for(let element of ar) 
{
    console.log(element)
}

// for -In loop // used for Non-iterable objects
var obj ={
    fname:"srkm",
    lname :"ysvr",
    age :20

}
for(let key in obj)
{
    console.log(obj[key])
}