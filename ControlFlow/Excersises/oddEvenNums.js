let arr = [1, 2, 3, 4, 5];

function even(arr) {
    for (let element of arr) {
        if (element % 2 === 0) {
            console.log(element);
        } 
        continue;
    }
}

function odd(arr) {
    for (let element of arr) {
        if (element % 2 === 0) {
            continue;
        } else {
            console.log(element);
        }
    }
}

even(arr)
console.log(odd(arr));


//! RETURN ZATRZYMUJE FUNKCJE!!!