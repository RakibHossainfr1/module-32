// 1.1 let vs const 
// const connot ReAssign
const name = 'Rakib';
// let do Assign
let age = 22;
age = 23;

// Defult Parameter

function maxNumber(arrays = []){
    const max = Math.max(...arrays);
    return max;
}
const biggest = maxNumber([ 79, 34, 88]);
console.log(biggest);

// 1.3 Tlmpate Stgring 
const companyName = 'rakib'; 
const compnayOld = 22;
const country = 'Bangaladesh';

const myAdress = `My company name is ${companyName}.My company ${compnayOld} years old. We are form ${country}`
console.log(myAdress);   

// 1.4 