/* || && ! ?? */

console.log(true || true);
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

let hasReservation =  true;
let acceptingWalkIns = false;

const canGetTable = hasReservation || acceptingWalkIns;

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

let age = 16;
let hasCar = true;

const canDrive = age >= 16 && hasCar;
console.log(canDrive);

console.log(!true);

let a = null;
const result = a ?? false;

console.log(result);

