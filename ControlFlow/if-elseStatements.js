let priceOfChocolate = 1.99;
let hasAmountInCash = 1;

canBuyChocolate = hasAmountInCash >= priceOfChocolate;

if (canBuyChocolate) {
    console.log("Enjoy your purchase!");
} else {
    console.log("Sorry you dont have enough money :(");
}

let hour = 10;

if (hour >= 6 && hour <= 14) {
    console.log("Serving breakfast");
} else if (hour > 12 && hour <= 14) {
    console.log("Serving lunch")
} else {
    console.log("Serving dinner");
}