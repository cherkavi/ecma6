let outerVariable = 20
// !!! avoid this type of declaration !!!
var outerList = [ 3, 4, 5, 6, 7 ]

tempFunction = (x) => {
    console.log(outerList)
    console.log(outerVariable)
}

tempFunction()

{
    let innerVariableLet =10;
}

{
    // !!! avoid this type of declaration !!!
    var innerVariableVar = 20;
}

try{
    console.log("let variable from some scope: " + innerVariableLet) // variable not found
}catch(ex){
    console.log(ex.message)
}

console.log("variable innerVariableVar is visible and found : " + innerVariableVar) // is visible and found

