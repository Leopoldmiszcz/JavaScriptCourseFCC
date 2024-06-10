// function sum(num1, num2) {
//     return num1 + num2;
// }

// const n = sum;
// console.log(n(2, 2));

// console.log(sum.length);

// function Programmer(name) {
//     this.name = name;
//     this.writeCode = function() {
//         console.log("Code in JavaScript");
//     }
// }

// console.log(Programmer.length);
// console.log(Programmer.constructor);
//

const Programmer = new Function("name", `this.name = name; this.writeCode = function() { console.log("Code in JavaScript"); }`); 

const dev = new Programmer('Steven')

dev.writeCode();