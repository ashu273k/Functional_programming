// This keyword --
// This refers to the current function execution

// Globally

// console.log(this);

// Function

// function test() {
//   console.log(this);
// }

// test();

// Object

// let obj1 = {
//   name: "Ashu",
//   greet: function () {
//     console.log(this);
//   },
// };

// obj1.greet()

// function inside a method
// let obj2 = {
//   name: "Ashu",
//   greet: function () {
//     function sayHi() {
//       console.log(this);
//     }
//     sayHi();
//   },
// };

// obj2.greet()

// Arrow Function 

// () => {
//     console.log(this);
// }