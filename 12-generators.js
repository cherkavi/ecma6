function* listOfValues(){
	for(let each of [3,4,5])
		yield each
}

for(let value of listOfValues()){
	console.log(`next value from generator:  ${value}`);
}

for(let value of listOfValues()){
	console.log(`next value from generator after second execution:  ${value}`);
}

function* generatorWrapper(){
	yield 1;
	yield 2;
	yield *listOfValues(); // yield* listOfValues()
}


let iterator = generatorWrapper();
console.log(`extended iterator next value:  ${JSON.stringify(iterator.next())}`);
console.log(`extended iterator next value:  ${JSON.stringify(iterator.next())}`);
console.log(`extended iterator next value:  ${JSON.stringify(iterator.next())}`);
console.log(`extended iterator next value:  ${JSON.stringify(iterator.next())}`);
console.log(`extended iterator next value:  ${JSON.stringify(iterator.next())}`);
console.log(`extended iterator next value:  ${JSON.stringify(iterator.next())}`);
console.log(`extended iterator next value:  ${JSON.stringify(iterator.next())}`);
