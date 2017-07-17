var list = [5, 6, 7, 8, 9];
var list2 = [19, 16, 15];

console.log("example of filtering and mapping: ");
console.log( list.filter(x => x>7).map( x => x + 5 ) );

var filter_function = (x) => {
    return x>7
};
console.log( list.filter(filter_function).map( x => x + 5 ) );



console.log('example of concatenating: ');
console.log(list.concat(list2));


console.log('example of manipulation with external elements');
var output = [];
list.concat(list2).forEach(element => output.push(element));
console.log(output);
