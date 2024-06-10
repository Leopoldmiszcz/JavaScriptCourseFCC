const numbers = [1, 10, 5, 14];
// let sum = 0;

// for (const num of numbers) {
//     sum += num;
// }

// console.log(`Total sum: ${sum}`);

const sum = numbers.reduce((accumulaotr, currentValue) => {
    return accumulaotr + currentValue;

}, 0);

console.log(sum);