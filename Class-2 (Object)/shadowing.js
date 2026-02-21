let obj = {
    name: 'John',
    age: 30,
    city: 'New York'
}

console.log(obj); 

const arr = [1, 2, 3, 4, 5];

Array.prototype.map = function() {
    console.log('This is a custom map function');
}

arr.map(); // This will call our custom map function instead of the original map function. This is called method shadowing.