let squareOfNumber = function(value)
{
    return value*value;
}
console.log(squareOfNumber(25));

let squareOfNumber2 = (value) => value*value;
console.log(squareOfNumber2(5));

let printSomething = () => console.log('i am print statement');

printSomething();

let addition =(val1,val2) => val1+val2;
console.log(addition(2,3));

let addition2 =(val1,val2) => 
{
    console.log(val1+val2);
}
addition2(3,4);

let complexFunction = () =>
{
    array = [1,2,3,4,5,6,7];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
    }

}
complexFunction();

// Delegates
// anonymous function
// extension method ?

const obj  = {
traditionalfuction  : function(){
    console.log("Traditional function",this)
},
arrowfunction : () => console.log("Arrow function",this)
};
console.log('This is environment',this);
obj.traditionalfuction();
obj.arrowfunction();