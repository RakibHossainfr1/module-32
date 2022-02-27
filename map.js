// 1st decalart a arrray 
const numbers = [3, 6, 4, 8];
// 2nd 1st array theke nia new dobble korbo
// const output = [];

/*
 function dobleIt(number){
    return number *2;
} 
*/
// else element for of loop
/* 
const dobleIt = x => x *2;
for (const x of numbers){
    const result = dobleIt(x);
    output.push(result);
}
console.log(output); 
 */

// 
const output = numbers.map(x => {
    const sum = x + x;
    const multiply = sum * x;
    return multiply;
});

console.log(output)