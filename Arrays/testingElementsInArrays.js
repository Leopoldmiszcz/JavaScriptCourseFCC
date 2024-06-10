// const numbers = [2, 4, 6, 8, 10];

// const areAllEven = numbers.every(number => {
//     return number % 2 === 0;
// });

// console.log(`areAllEven: ${areAllEven}`);

const numbers = [1, 2, 3, 5, 8, 9];

const hasOneEvenNumber = numbers.some(number => number % 2 === 0);
console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`);