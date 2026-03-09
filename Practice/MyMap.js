Array.prototype.myMap = function (callback, thisArg) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i]))
    }
    return arr
};

const arr = [1, 2, 3];
const result = arr.myMap(function (x) {
  return x * 2;
});
console.log(result);