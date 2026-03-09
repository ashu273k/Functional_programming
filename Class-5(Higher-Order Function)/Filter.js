// filter ->
// callback
// iteration
// return the result in a new Array
// This exists inside the Array Prototype
// this works with condition

Array.prototype.myFilter = function(callback) {

    if (this == null || this == undefined) {
        throw new Error('Array not found')
    }

    let results = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            results.push(this[i])
        }
    }
    return results
}

let arr = [1, 2, 4, 5, 7, 6]

console.log(arr.myFilter((num) => {
    return num%2 == 0
}))
