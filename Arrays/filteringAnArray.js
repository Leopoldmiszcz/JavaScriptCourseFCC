// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(`Even numbers: ${evenNumbers}`);

const employees = [
    {id: 1, name: "Alice", job: "Developer"},
    {id: 2, name: "Bob", job: "Desingner"},
    {id: 3, name: "Charlie", job: "Sales"},
    {id: 4, name: "Danielle", job: "Developer"},
]

const developers = employees.filter(employee => employee.job === "Developer");

console.log(developers);