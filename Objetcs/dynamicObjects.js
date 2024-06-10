const person = {
    name: "Steven"
}

console.log(person);

person.favFood = "tacos";

console.log(person);

delete person.favFood;

console.log(person);

person.eat = function () {
    console.log("Start eating");
}

person.eat();