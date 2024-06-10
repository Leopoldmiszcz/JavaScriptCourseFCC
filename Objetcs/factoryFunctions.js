// They are used to customise object parameters

const dog = {
    name: "Max",
    breed: "Dachshund",
    age: 5,
    weightInPounds: 12,
    eat: function() {
        console.log("Chomp!");
    },
    bark() {
        console.log("Woof!");
    }
}

function getDog(name, breed, age, weightInPounds) {
    return {
        name: name,
        breed: breed,
        age: age,
        weightInPounds,
        eat() {
            console.log("Chomp!");
        },
        bark() {
            console.log("Woof!");
        }
    }
}

const anotherDog = getDog("Marley", "Chocolate Lab", 3, 60);

console.log(anotherDog);