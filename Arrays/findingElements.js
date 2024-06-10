const numbers = [5, 4, 3, 2, 1];

const indexOfThree = numbers.indexOf(3);
// console.log(indexOfThree);
// console.log(numbers[indexOfThree]);

const lastIndexOfThree = numbers.lastIndexOf(3);
// console.log(lastIndexOfThree);

const indexOfTen = numbers.lastIndexOf(10);
// console.log(indexOfTen);
// console.log(numbers[indexOfTen]);

if (indexOfTen === -1) {
    console.log("Number 10 is not found in the array");
}

if (numbers.includes(10)) {
    console.log("Number 10 is included in the array");
}