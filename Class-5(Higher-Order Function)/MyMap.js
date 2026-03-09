// Map ->
// callback
// iteration
// return the result in a new Array
// This exists inside the Array Prototype

// let arr = [1, 2, 3, 4]

// let square = arr.map((num) => {
//     return num*num
// })

// console.log(square)

// Polyfill for Map

Array.prototype.myMap = function(callback) {
    // this -> working array
    if (this == null || this == undefined) {
        throw new Error('No array Found')
    }

    if (Array.isArray(this)) {

        if(typeof callback != 'function') {
            throw new Error('the function is required as the callback')
        }
        
            let results = []
        
            for (let i = 0; i < this.length; i++) {
                results.push(callback(this[i]))
            }
        
            return results;
    } else {
        throw new Error('No array Found')
    }

}

let nums1 = [1, 2, 3, 4, 5]
let nums2 = [1, 2, 3, 4, 5, 6, 7]

console.log(nums1.myMap(function(num) {
    return num*num
}))