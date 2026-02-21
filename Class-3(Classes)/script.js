// Classes

class Pizza {
    constructor(size, toppings, prefrence, crust) {
        this.size = size;
        this.toppings = toppings;
        this.prefrence = prefrence;
        this.crust = crust;
    }

    serve() {
        console.log(`The ${this.size} ${this.prefrence} pizza with ${this.crust} crust and ${this.toppings.join(', ')} toppings is ready to be served!`);
    }

}

let pizza1 = new Pizza('large', ['pepperoni', 'mushrooms'], 'veggie', 'thin');
console.log(pizza1);
pizza1.serve();

let pizza2 = new Pizza();
// pizza2.serve();
// This will throw an error because the properties of pizza2 are undefined and we are trying to access them in the serve method.


/**
 * Four paradigms of OOPs:
 * Inheritance
 * Encapsulation
 * Polymorphism
 * Abstraction
 */

class StuffedPizza extends Pizza {
    constructor(size, toppings, prefrence, crust, stuffing) {
        super(size, toppings, prefrence, crust);
        this.stuffing = stuffing;
    }

    serve() {
        console.log(`The ${this.size} ${this.prefrence} pizza with ${this.crust} crust and ${this.toppings.join(', ')} toppings is ready to be served! It has ${this.stuffing} stuffing.`);
    }
}