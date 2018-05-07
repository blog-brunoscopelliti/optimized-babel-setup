class Animal {
    constructor () {}
}

class Dog extends Animal {
    constructor () {
        super();
    }

    bark () {
        console.log("Bauw");
    }
}

const dog = new Dog

dog.bark();
