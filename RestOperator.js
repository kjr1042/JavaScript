const sumOfNumbers =(...nos) =>
{
    var tot =0;

    for(let i =0;i<nos.length;i++)
    {
        tot += nos[i];

    }
    return tot;

}
console.log(sumOfNumbers(1,2,3,4,5,6,7,8,9,10));

const sumOfNumbers2 = (a,b,...nos) => {
    var tot = 0;
    console.log(`The starting number ${a} and ${b}`)
    for (let i = 0; i < nos.length; i++) {
      tot += nos[i];
    }
    return tot;
};
console.log(sumOfNumbers2(10,20,1,2,3,4,5,6,7,8,9,10));
