let maxBtwTwo = function (numOne, numTwo) {   // This type of function called "function Expression".
    return (numOne > numTwo) ? numOne : numTwo;
};

let main = function () {
    let numOne = 23;
    let numTwo = 43;
    console.log(`Max(${numOne},${numTwo}): ${maxBtwTwo(numOne, numTwo)}`);
};

main()