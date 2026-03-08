function myNew(Constructor, ...args) {
    const obj = {}
    obj.__proto__ = Constructor.prototype
    Constructor.call(obj, args)
    return obj
}

function Person(name) {
  this.name = name;
}

const person = myNew(Person, "John");
console.log(person.name);
console.log(person instanceof Person);