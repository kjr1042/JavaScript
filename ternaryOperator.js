const age= 17;
let message;

if(age>=18)
{
    message ='you are major';
}
else
{
    message ='you are minor';
}
console.log(message);

// ternary operator
message = (age>=18) ? "you are major" : "you are minor";
console.log(message);

let a=80, b=90, c=30;
result = (a>b && a>c) ? 'a is greater':(b>a && b>c) ? 'b is greater':'c is greater';
console.log(result);