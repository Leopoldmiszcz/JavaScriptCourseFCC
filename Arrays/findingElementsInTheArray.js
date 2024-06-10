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

const employee = employees.find(function(e) {
    return e.name === "Jim"
} );

console.log(employee);