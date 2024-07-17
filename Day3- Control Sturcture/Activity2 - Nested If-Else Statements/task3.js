let numOne, numTwo, numThree;
numOne = 12;
numTwo = 25;
numThree = 11;
console.log(`The three numbers:[${numOne},${numTwo},${numThree}]`);
if (numOne > numTwo && numOne > numThree)
    console.log(`${numOne} is greatest.`);
else if (numTwo > numOne && numTwo > numThree)
    console.log(`${numTwo} is greatest.`);
else
    console.log(`${numThree} is greatest.`)