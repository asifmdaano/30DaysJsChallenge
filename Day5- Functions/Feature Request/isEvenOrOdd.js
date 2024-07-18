const isEvenOrOdd = num => {
    if (num % 2 == 0)
        return true;
    else
        return false;
};

function main() {
    let num = 3;
    if (isEvenOrOdd(num))
        console.log(`${num} is an even.`);
    else
        console.log(`${num} is an odd.`);

}

main();