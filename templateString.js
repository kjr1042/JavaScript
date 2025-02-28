const firstName = 'abishek';
const lastName ='sharama';

const greetings = "Hello, "+firstName+" "+lastName+" How are you?";

console.log(greetings);

// back tick
const greetings2 = `Hello, ${firstName} ${lastName}, How are you?`;
console.log(greetings2);

const add =(a,b) => a+b;
const addResult =`Result, ${add(4,5)}`;
console.log(addResult);

const message = `
Hello ${firstName},
this is message for you,
the sum of 345 & 564 is ${add(345,564)},
bye bye
`;
console.log(message);