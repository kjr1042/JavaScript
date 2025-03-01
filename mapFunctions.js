const numbers =[1,2,3,4,5,6,7,8,9,10];
const squareOfNumbers =numbers.map((num)=>num*num);
console.log(squareOfNumbers);

const product =[
    {prodId:1001,prodName:'desktop',prodPrice:30000},
    {prodId:1002,prodName:'laptop',prodPrice:40000},
    {prodId:1003,prodName:'tablet',prodPrice:20000},
    {prodId:1004,prodName:'mobile',prodPrice:10000}
];

const productNames = product.map((product)=> product.prodName);
console.log(productNames);

const names =product.map(product=>console.log(product.prodName));
names.map(prod => prod);
