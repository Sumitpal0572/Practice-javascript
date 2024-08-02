// Factoryfunction
// Animal.prototype.printType = function () {
//     console.log(obj.type);
// }


// function Animal(type, legs) {
//     let obj = {}
//     Object.setPrototypeOf(obj, Animal.prototype)
//     obj.type = type;
//     obj.legs = legs;

//     return obj;

// }

// let a1 = Animal("Domestic", 4)
// console.log(a1);

// Bird.prototype.printlegs = function () {
//     console.log(obj.legs);
// }
// Object.setPrototypeOf(Bird.prototype, Animal.prototype)
// function Bird(type, legs, canFly) {
//     let obj = Animal(type, legs);
//     Object.setPrototypeOf(obj, Bird.prototype)
//     obj.canFly = canFly;

//     return obj;
// }

// let b1 = Bird("wild", 2, false)
// console.log(b1);



// Constructorfunction


// Animal.prototype.printType = function () {
//     console.log(this.type);
// }


// function Animal(type, legs) {
//     this.type = type;
//     this.legs = legs;
// }

// let animal = new Animal("Domestic", 4)
// console.log(animal);


// Object.setPrototypeOf(Bird.prototype, Animal.prototype)
// function Bird(type, legs, canfly) {
//     Animal.call(type, legs);
//     this.canfly = canfly
// }

// let bird = new Bird("domestic", 2, true)
// console.log(bird);



class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs
    }

}

let ani1 = new Animal("wild", 4)
console.log(ani1);





