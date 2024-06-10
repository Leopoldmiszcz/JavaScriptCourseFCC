const numbers = [5, 4, 3, 2, 1];

numbers.push(7);  // Adds element to the end of the array
console.log(numbers);

numbers.unshift(25);  // Adds element to the beggining of the array
console.log(numbers);

numbers.splice(1, 0, 25, 24);  // Adds numbers based on the inputed index
console.log(numbers);