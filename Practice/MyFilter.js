Array.prototype.myFilter = function (callback, thisArg) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
          result.push(this[i])  
        } 
    }
    return result
};

const arr = [1, 2, 3, 4, 5, 6];
const evens = arr.myFilter(function (x) {
  return x % 2 === 0;
});
console.log(evens);