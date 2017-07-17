function summarize (x, y, z = 5) {
    console.log('x=%s  y=%s  z=%s', x, y, z)
    console.log(`x=${x}  y=${y}  z=${z}`)
    // example of previous solutions
    if(y===undefined){
        return x+z;
    }
    return x+y+z;
}

console.log('example with full list of parameters:')
console.log(summarize(5,5,5))

console.log('example with partial list of parameters:')
console.log(summarize(5,5))

console.log('example with partial list of parameters:')
console.log(summarize(5))
