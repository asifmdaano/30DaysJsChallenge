function main() {
    let arr = [10, 12, 4, 23, 62];

    let sum = arr.reduce((accumulator, currVal) => {
        console.log(`Accumulator: ${accumulator}\nCurrent Value: ${currVal}\n`);
        return accumulator + currVal;   // the return value stored in accumulator.
    }, 0); //the initial value of accumulator is 0 which is optional.

    console.log(sum);
}

main();
