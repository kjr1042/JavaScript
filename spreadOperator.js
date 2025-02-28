// spread operator with array

const sum = (a,b) => a+b;
console.log(sum(5,6));

const numbers= [2,3,4];
console.log(sum(numbers[0],numbers[1]));

console.log(sum(...numbers));

const morenumebers= [1,...numbers];

console.log(morenumebers);

const otherNumbers = [5,6];

const morenumebers2 = [1,...numbers,...otherNumbers]
console.log(morenumebers2);

const[first,second,...remainingValues]=morenumebers2;
console.log(remainingValues);

// deep copy
array2 =[1,2,3,4,5];

let newArray = array2; //shallow copy

newArray[0] = array2[0]; //deep copy

console.warn(newArray[4]);

// spread operator : object

const person = {
    firstName:'abhishek',
    lastName: 'sharma' 
}

const person2 = {
    name:person.firstName,
    age: 23 
}

console.log(person2);

const address ={
    streetName:'MG road',
    city:'bangalore',
    pinCode:516213


}

const jsonReturn = ()=>
{
   return{ ...person,
    age: 23,
    ...address}
}
console.log(jsonReturn());

console.log(JSON.stringify(jsonReturn()));

console.log(JSON.parse(JSON.stringify(jsonReturn())));