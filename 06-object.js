// call function as a constructor:
function Person(firstArgument, secondArgument){
    this.name = firstArgument;
    this.surname = secondArgument;
    this.toString = () => {
        return `${this.name}  ${this.surname}`;
    }
};

let jack = new Person("Jack", "Riper");
console.log(`explicit object creation from function : ${jack.name}   ${jack.surname}   ${jack.toString()}`);


let john = {
    name : "John",
    surname : "Lehnon",
    toString : function(){
        return `${this.name}  ${this.surname}`;
    }
};
console.log(`object: ${john}`);

let sharlize = {
    name : "Sharlize",
    surname : "Theron",
    toString : ()=>{
        return `${this.name}  ${this.surname}`;
    }
}
console.log(`object with arrow function is not working : ${sharlize}`)


let sourceObject = {model: "2104", color: "green"}
let {model: modelFromSource, color: colorFromSource} = sourceObject;
console.log(`destructuring the object:  ${modelFromSource}  ${colorFromSource} `);
let {model:modelSource, color:colorSource} = sourceObject;
console.log(`destructuring the object:  ${modelSource}  ${colorSource} `);
let {model, color} = sourceObject;
console.log(`destructuring the object with shortcuts:  ${model}  ${color} `);
let {["model"]:modelByPropertyName} = sourceObject;
console.log(`destructuring the object with naming value:  ${modelByPropertyName} `);
