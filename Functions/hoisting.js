add(2,2)
min(2, 2)  // Cant be used bc of hoisting

function add(num1, num2) {
    console.log(num1+num2);
};

// add(2, 2)

let min = function(num1, num2) {
    console.log(num1 - num2);
};