// reduce takes a callback
// callback(acc, curr) -> InitialValue
// iterate
// perform operations

Array.prototype.myReduce = function(callback, intialValue) {

    let acc;
    let firstIndex;
    
    if ( arguments.length == 1) {
        acc = this[0]
        firstIndex = 1
    } else {
        acc = intialValue
        firstIndex = 0;
    }

    // this - working array

    for (let i = firstIndex; i < this.length; i++) {
        acc = callback(acc, this[i])
    }

    return acc
}


let arr = [1, 2, 3, 4, 5, 6]

let sum = arr.myReduce(function(acc, curr) {
    acc = acc+curr
    return acc
}, 5)

console.log(sum)