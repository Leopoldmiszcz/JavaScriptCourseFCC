// They are better than factory functions, initialize an object

function Dog(name, breed, age, weightInPounds) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    this.eat = function() {
        console.log("Chomp!")
    };

    this.bark = function() {
        console.log("Bark!");
    };
}

const dog = new Dog("Marley", "Lab", 3, 60);

console.log(dog);