console.log(Math.round(3.14));
console.log(Math.floor(4.6));
console.log(Math.ceil(3.14));
console.log(Math.max(1, 2, 3, 4));
console.log(Math.min(3.14, 3.13, 3.10));
console.log(Math.pow(2, 3));

Math.random();

let min = 1;
let max = 10;

const randomNum = Math.round(Math.random() * (max - min) + min)
console.log(randomNum);