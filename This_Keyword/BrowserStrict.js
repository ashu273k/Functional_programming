'use strict'


// Browser - non-strict mode

// This keyword -
// This refers to the current function execution

// Globally
this.name = 'Global Aalu';

console.log(this);

// Function

function test() {
    console.log(this);
}

test();

// OBJECT

let obj = {
    name: 'Aalu',
    greet: function() {
        console.log(this);
    }
}

obj.greet();

// Function inside a method

let obj1 = {
    name: 'Aalu',
    greet: function() {
        function innerFunc() {
            console.log(this);
        }
        innerFunc();
    }
}

obj1.greet();