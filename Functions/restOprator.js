function multiply(...args) {
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log(multiply(1, 2, 3, 4));

function multiply2(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
}

console.log(multiply2(1, 2, 3, 4));