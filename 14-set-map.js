let strings = ["three", "one","two","four", "four", "four", "four"];
console.log(`init array: ${strings}`);

let category = new Set(strings);
console.log(`list of unique objects: ${JSON.stringify([...category])}`);

category.add("5");
category.add(5);
category.add(5);
console.log(`after adding two elements: ${JSON.stringify([...category])}`);

category.delete("one");
category.delete("zero");
console.log(`after removing 'one','zero': ${JSON.stringify([...category])}`);

console.log(`has catetory 'two': ${category.has("two")}`);
console.log(`has catetory 'six': ${category.has("six")}`);
