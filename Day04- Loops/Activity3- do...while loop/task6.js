let fact = 1, num = 0;
let i = 1;
do {
    fact *= i;
    i++
} while (i<=num);

process.stdout.write(`${num}! = ${fact}`);