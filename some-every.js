function hasOddNumber(arr) {
    let returnBool = arr.some(function(value) {
        return (value%2 === 1)
    })
    return returnBool
}

function hasAZero(num) {
    let str = num.toString()
    let arr = Array.from(str)
    let returnBool = arr.some(function(num) {
        return (num.indexOf(0) !== -1)
    })
    return returnBool
}

function hasOnlyOddNumbers(arr) {
    let returnBool = arr.every(function(num) {
        return (num%2 === 1)
    })
    return returnBool
}

function hasNoDuplicates(arr) {
    let returnBool = arr.every(function(num, index, arr) {
        arr.shift()
        return (arr.indexOf(num) !== -1)
    })
    return !returnBool
}

function hasCertainKey(arr, key) {
    let returnBool = arr.every(function(obj) {
        return (obj[key] !== undefined)
    })
    return returnBool
}

function hasCertainValue(arr, key, searchValue) {
    let returnBool = arr.every(function(obj) {
        return (obj[key] === searchValue)
    })
    return returnBool
}
