const calcuProduct = (numOne, numTwo = 5) => {
    return numOne * numTwo;
};

function main() {
    let x = 3;
    let y = 7;
    console.log(`${x} x ${y} = ${calcuProduct(x, y)}`);
}

main();