// Classes

class Pizza {
    constructor(size, toppings, prefrence, crust) {
        this.size = size;
        this.toppings = toppings;
        this.prefrence = prefrence;
        this.crust = crust;
    }

    serve() {
        console.log(`The ${this.size} is ready to be served!`);
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


// Classical Inheritance - Not present in JS

// Prototypal Inheritance: JS uses prototypal inheritance, which means that objects can inherit properties and methods from other objects. 
// This is achieved through the prototype chain.

class StuffedPizza extends Pizza {

    constructor(size, toppings, prefrence, crust, stuffing) {
        super(size, toppings, prefrence, crust);
        this.stuffing = stuffing;
    }

    serve() {
        console.log(`The ${this.size} ${this.prefrence} pizza with ${this.crust} crust and ${this.toppings.join(', ')} toppings is ready to be served! It has ${this.stuffing} stuffing.`);
    }

}

let stuffedPizza1 = new StuffedPizza('medium', ['olives', 'onions'], 'veggie', 'thick', 'cheese');
console.log(stuffedPizza1);
stuffedPizza1.serve();