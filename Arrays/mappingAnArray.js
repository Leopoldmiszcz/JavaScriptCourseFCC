// const numbers = [2, 4, 6, 8, 10];

// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);

// const characters = ['a', 'b', 'c', 'd'];

// const upperCaseCharacters = characters.map(char => char.toUpperCase());

// console.log(upperCaseCharacters);

const employee = [
    {id: 1, name: "Jhon", email: "eXamPLE@gmail.com"},
    {id: 1, name: "Ela", email: "eXamPLE@OUTLOOK.com"},
    {id: 1, name: "Lea", email: "eXamPLE@mAC.com"},
    {id: 1, name: "Lia", email: "eXamPLE@THUNDERbird.com"},
];

const toLowerCaseEmail = employee.map(employee => ({...employee, email:  employee.email.toLocaleLowerCase()}));

console.log(toLowerCaseEmail);