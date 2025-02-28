// JSON => Key : Value {:}
let person = {
    firstName : 'sudipta',
    lastName: 'roy',
    course:'react',
    currentDate: new Date()
}

const {firstName,lastName,course,currentDate}=person;

console.log(firstName);
console.log(course);

getAddress = () =>
{
    return{
        block: 'bf block',
        state:'delhi',
        country:'India'
    };
};

const {block,state} =getAddress();
console.log(state);

printName = (person) =>
{
    console.log(person.firstName);
}
printName(person);

printName2 = ({firstName}) =>
{
    console.log(firstName);
}
printName2(person);

const arr =[1,2,3,4];
const[first,second,third,four] = arr;
console.log(four);

