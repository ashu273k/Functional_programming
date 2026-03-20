// Node - non-strict mode

// This keyword - refers to the current function execution

// Globally

// console.log(this); // Output: {}

// function fun() {
//   console.log(this); // Output: global object (e.g., [object global])
// }

// fun();

// Object Method

// const object = {
//     name: 'Alice',
//     greet: function() {
//         console.log(this); // Output: the object itself
//     }

// }

// object.greet();

let object1 = {
    name: 'Bob',
    greet: function() {
        function sayHi() {
            console.log(this); // Output: global object (e.g., [object global])
        }
        sayHi();
    }
}

object1.greet();