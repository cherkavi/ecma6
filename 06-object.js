// call function as a constructor:
function Person(firstArgument, secondArgument){
    this.name = firstArgument;
    this.surname = secondArgument;
    this.toString = () => {
        return `${this.name}  ${this.surname}`;
    }
}

let jack = new Person("Jack", "Riper");
console.log(`explicit object creation from function : [${jack.name}]   [${jack.surname}]   ${jack.toString()}`);


let john = {
    name : "John",
    surname : "Lehnon",
    toString : function(){
        return `${this.name}  ${this.surname}`;
    }
};
console.log(`object: ${john}`);


let sharlize = new Object();
sharlize.name = "Sharlize";
sharlize.surname = "Theron";
sharlize.toString = ()=>`${this.name}  ${this.surname}`;
console.log(`object with arrow function is not working : ${sharlize}`);


let vendor = "casio", number="9430", year="1998";
let watch = {vendor, number, year, toString:()=>`${vendor} ${number} ${year}`};
console.log(`short hand of creating the object: ${watch}`);


let sourceObject = {model: "2104", color: "green"};
let {model: modelFromSource, color: colorFromSource} = sourceObject;
console.log(`destructuring the object to new variables:  ${modelFromSource}  ${colorFromSource} `);
let {model, color} = sourceObject;
console.log(`destructuring the object with shorthand:  ${model}  ${color} `);
let {["model"]:modelByPropertyName} = sourceObject;
console.log(`destructuring the object with computing property:  ${modelByPropertyName} `);


new Object(); // {}
new String(); // "", '', ``
new Number(); // 0
new Boolean(); // true/false
new Array(); // []
new RegExp(); //
new Function(); // function()/()=>
new Date(); //

[jack, john] = [john, jack];
console.log(`after switch,  jack: ${jack}    john: ${john}`);


for(let index of [3,4,5]){
    console.log(`example of object with calculated property: ${JSON.stringify({['prop'+index]: index})}`);
}