// let char = ['c', 'd', 'b', 'a'];
// char.sort();
// char.reverse();
// console.log(char);

 let employees = [
    {id: 1, name: "Jen"},
    {id: 1, name: "Steven"},
    {id: 1, name: "Andrew"},
    {id: 1, name: "Terry"},
];

employees.sort((a, b) => {
    const lowercaseA = a.name.toLowerCase();
    const lowercaseB = b.name.toLowerCase();

    if(lowercaseA < lowercaseB) {
        return -1;
    } else if (lowercaseA > lowercaseB) {
        return 1;
    } else {
        return 0;
    }
});

console.log(employees)