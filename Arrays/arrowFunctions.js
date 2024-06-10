const employees = [
    {
        id: 1,
        name: "Jim"
    },
    {
        id: 2,
        name: "Michael Scott"
    },
    {
        id: 3,
        name: "Pam"
    }
];

// const employee = employees.find(function(e) {
//     return e.name === "Jim"
// } );

// console.log(employee);

const employee = employees.find((e) => e.name === "Jim");

console.log(employee);


// function add(num1, num2) {
// 
// };

const add = (num1, num2) => {
    return num1 + num2;
};