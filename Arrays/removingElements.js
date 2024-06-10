const numbers = [1, 2, 3, 4, 5];

const lastElement = numbers.pop();  // Removes the last element
console.log(`lastElement: ${lastElement} \n`);

const firstElement = numbers.shift();
console.log(`firstElement: ${firstElement} \n`);

const middleElement = numbers.splice(2, 1);
console.log(`middleElement: ${middleElement}\n`);
