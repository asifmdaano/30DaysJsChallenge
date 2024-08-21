const sumOf2Num = (numOne, numTwo) => { // This type function called 'Arrow function'.
    return numOne + numTwo;
};

const main = () => {
    let numOne = 5, numTwo = 7;
    console.log(`The sum of two numbers ${numOne} and ${numTwo}: ${sumOf2Num(numOne, numTwo)}`);
};

main();