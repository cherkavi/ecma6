const VALUE = 5555;
console.log( "constant inside the current block: " + VALUE  );

(function(){
    console.log(`re-assign constant with new value`);
    const VALUE = 20;
    console.log("constant inside nested block after re-init: " + VALUE);
})();

console.log( "constant inside the current block after execution of function : " + VALUE  );
