function display1() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }

    console.log(i);
}

function display2() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }

    // console.log(i);  //! Throws error that it's not defined
}

display1();
display2();