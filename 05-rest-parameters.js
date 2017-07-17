function summarize (x, ... rest_list) {
    return rest_list.map(each => each + x)
}

console.log("with parameters ")
console.log(summarize(5, 1,2,3,4,5))

console.log("without parameters ")
console.log(summarize(5))
