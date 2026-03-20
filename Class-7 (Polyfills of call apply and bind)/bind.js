const user = {
  name: "Aashu",
};

function greet(city, country) {
  console.log(`Hello  ${this.name} ${city} ${country}`);
}




// Polyfill for Bind

Function.prototype.myBind = function (context, ...boundArgs) {
    // console.log(this) -> greet
    const originalFn = this;
    
    return function (...laterArgs) {
        return originalFn.apply(context, [...boundArgs, ...laterArgs]);
    };
};
let greetFn = greet.myBind(user, "Bengaluru");
console.log(greetFn);
greetFn("Mumbai", "India");

// greetFn()