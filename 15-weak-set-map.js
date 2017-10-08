let one = "one";
let two = "two";
let three = "three";
let four = "four";

let category = new Set([one, two, three, four]);
console.log(`list of unique objects: ${JSON.stringify([...category])}`);

let categoryWeak = new WeakSet();
categoryWeak.add(one);
// console.log(`list of unique objects: ${JSON.stringify([...categoryWeak])}`);

