// Pizza Shop - Toppings, Crust, Size, Prefernces

let pizza1 = {
    size: "Medium",
    crust: "Thin",
    toppings: ["Pepperoni", "Mushrooms", "Olives"],
    preference: 'veg'
}

let pizza2 = {
    size: "Small",
    crust: "Thick",
    toppings: ["Pepperoni", "Mushrooms", "Olives"],
    preference: 'non-veg'
}

// here we can see that pizza1 and pizza2 have the same properties but different values.
// To avoid this repetition, we can use a constructor function to create multiple pizza objects with similar properties.

// Constructor Function
function Pizza(size, crust, toppings, preference) {
    // this -> Pizza {}
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.preference = preference;
    

}

Pizza.prototype.serve = function() {
    console.log(`The ${this.size} ${this.preference} pizza with ${this.crust} crust and ${this.toppings.join(', ')} toppings is ready to be served!`);   
}

let order1 = new Pizza('medium', 'thin', ['pepperoni', 'mushrooms', 'olives'], 'veg');
let order2 = new Pizza('small', 'thick', ['pepperoni', 'mushrooms', 'olives'], 'non-veg');

console.log(order1);
order1.serve();
console.log(order2);
order2.serve();

// 2nd way 

// function createPizza(size, crust, toppings, preference) {
//     let obj = {}
//     obj.size = size;
//     obj.crust = crust;
//     obj.toppings = toppings;
//     obj.preference = preference;
//     obj.serve = function() {
//         console.log(`The ${this.size} ${this.preference} pizza with ${this.crust} crust and ${this.toppings.join(', ')} toppings is ready to be served!`);
//     }
//     return obj;
// }

// let order3 = createPizza('medium', 'thin', ['pepperoni', 'mushrooms', 'olives'], 'veg');
// let order4 = createPizza('small', 'thick', ['pepperoni', 'mushrooms', 'olives'], 'non-veg');

// console.log(order3);
// console.log(order4);

// We can't use the serve method of order3 and order4 because they are not created using a constructor function, they are created using a factory function. 
// In a factory function, we create a new object and return it, but we don't have access to the prototype of the object. 
// In a constructor function, we create a new object using the new keyword and we have access to the prototype of the object.