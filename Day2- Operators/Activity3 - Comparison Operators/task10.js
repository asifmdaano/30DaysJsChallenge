let a = b = 20;

console.log("result using ==: " + (a == b)); // == is called 'loose equality'. It's first convert the variable in common dataType, then compare.

console.log("result using ===: " + (a === b)); // It's called 'strict equality'. It's doesn't convert the variable in common dataType simply compare the value.