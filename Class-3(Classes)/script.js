// Classes

class Pizza {

    static totalPizza = 0
    #size

    constructor(size, toppings, prefrence, crust) {
        this.#size = size;
        this.toppings = toppings;
        this.prefrence = prefrence;
        this.crust = crust;
        Pizza.totalPizza++;
    }

    static showTotalPizza() {
        console.log(`Total pizzas made: ${Pizza.totalPizza}`);
    }

    serve() {
        console.log(`The ${this.#size} is ready to be served! (Normal method)`);
    }

    #describe() {
        console.log('Tasty and juicy pizza!');
    }

    test() {
        this.#describe();
    }

}

let pizza1 = new Pizza('large', ['pepperoni', 'mushrooms'], 'veggie', 'thin');
console.log(pizza1);
pizza1.serve();
pizza1.test();

let pizza2 = new Pizza();
// pizza2.serve();
// This will throw an error because the properties of pizza2 are undefined and we are trying to access them in the serve method.

Pizza.showTotalPizza();
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
        console.log(`The ${this.size} ${this.prefrence} pizza with ${this.crust} crust and ${this.toppings.join(', ')} toppings is ready to be served! It has ${this.stuffing} stuffing.(Overridden method)`);
    }

}

let stuffedPizza1 = new StuffedPizza('medium', ['olives', 'onions'], 'veggie', 'thick', 'cheese');
console.log(stuffedPizza1);
stuffedPizza1.serve();

// Encapsulation: Encapsulation is the process of hiding the internal details of an object and only exposing a public interface.
// In modern JS to make private we use # before the property name.
// In JS, we can achieve encapsulation using closures or by using the new private fields syntax.