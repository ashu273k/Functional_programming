// What is call method?



let obj1 = {
    name: "Mark",
    sayHello(city, country){
        console.log(`Hi ${this.name} ${city} ${country}`)
    }
    
}

let obj2 = {
    name: "Steve"
}


// sayHello.call(obj2, 'mumbai', 'India') // we do not have native call

// We want to write our own version of the call method

// Polyfill for call method 
Function.prototype.myCall = function(context, ...args) {
    
    context = context || globalThis
    // this -> sayHello
    // context -> obj2
    context.tempFn = this 
    const result = context.tempFn(...args)
    delete context.tempFn
    return result

}

// console.log(typeof null) -> object

obj1.sayHello.myCall(null, 'Mumbai', 'India')