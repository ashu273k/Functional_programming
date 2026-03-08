const calc = {
  base: 10,
  add: function (a, b) {
    return this.base + a + b;
  }
};

function bindBase(base) {
  // Return a function that takes (a, b) and returns base + a + b
    return calc.add.bind({ base: base });
}

const fn = bindBase(10);
console.log(fn(1, 2));


// What does bind do in the above code?

/**bind creates a new function with its this value permanently set to 
 * a specific object. It does not call the function -- it returns a new one 
 * const boundFn = someFunction.bind(thisArg, arg1, arg2, ...);
 * return calc.add.bind({ base: base });
 * calc.add normally uses this.base where this refers to the calc object (base = 10).
 * By calling .bind({ base: base }),you create a new function where this is locked to { base: base }
 * -- whatever value you pass to bindBase.
 * 
 * so 
 * const fn = bindBase(5);   // this.base is now 5, not 10
console.log(fn(1, 2));    // 5 + 1 + 2 = 8
 */

