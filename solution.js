function explode(x){
    let nums = []
    let total = 0
    let arr = []
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] == 'number') {
            nums.push(x[i])
        }
    }
    if (nums.length === 0) {
        return 'Void!'
    }
    for (let k = 0; k < nums.length; k++) {
        if (nums.length === 1) {
            total = nums[0]
        }
        else if (nums.length > 1) {
            total = nums[0] + nums[1]
        }
        else if (nums[k] === 0) {
            return []
        }
    }
    for (let j = 0; j < total; j++) {
        arr.push(x)
    }
    return arr
}

console.log(explode([1, 0])) // [[1, 0]]
console.log(explode([2, 3])) // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3])) // [['a', 3], ['a', 3], ['a', 3]]
console.log(explode(['a', 'b'])) // Void!
console.log(explode(["a", 0])) // []
