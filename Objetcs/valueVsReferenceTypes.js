//! Primitive are copied by their value

let a = 10;
let b = a;  //* Same as assigning let b = 10

a = 20;

console.log(a);
console.log(b);

//! Object are copied by their reference

let c = { value: 20 }

b = c;

c.value = 100;

console.log(c);
console.log(b);