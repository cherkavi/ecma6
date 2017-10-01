// execute inline function
(function (){console.log("inline function execution")})();

// execute function like argument
let refToFunction = function (a, b){
    console.log(`function with two arguments ${a}  ${b}`)
};

refToFunction(10, 20);
console.log(`toString for function returned: ${refToFunction}`);

// declare function via arrow
let refToFunction2 = (a,b) => {
    console.log(`arrow function with two arguments ${a}  ${b}`)
}
refToFunction2(10, 20);