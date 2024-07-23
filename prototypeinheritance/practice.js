// Factoryfunction
Animal.prototype.printType = function () {
    console.log(obj.type);
}


function Animal(type, legs) {
    let obj = {}
    Object.setPrototypeOf(obj, Animal.prototype)
    obj.type = type;
    obj.legs = legs;

    return obj;

}

let a1 = Animal("Dmestic", 4)
console.log(a1);

Bird.prototype.printlegs = function () {
    console.log(obj.legs);
}
Object.setPrototypeOf(Bird.prototype, Animal.prototype)
function Bird(type, legs, canFly) {
    let obj = Animal(type, legs);
    Object.setPrototypeOf(obj, Bird.prototype)
    obj.canFly = canFly;

    return obj;
}

let b1 = Bird("wild", 2, false)
console.log(b1);