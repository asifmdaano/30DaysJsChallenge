const higherOrderFun = (funOne, value, times) => {
    while (times != 0) {
        value = funOne(value);
        times--;
    }
    return value;
};

const sqrt = a => a ** (1 / 2);

function main() {
    let num = 390625;
    let times = 3;
    console.log(`Square root of ${num}, ${times} times: ${higherOrderFun(sqrt, num, times)}`);
}

main();