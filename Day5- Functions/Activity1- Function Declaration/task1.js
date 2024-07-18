function isEvenOrOdd(num) {     // this type of function called function declaration.
    if (num % 2 === 0 && num >= 0)
        return "even";
    else
        return "odd";
}

function main() {
    let num = 2;
    console.log(`${num} is an ${isEvenOrOdd(num)} number`);

}

main()