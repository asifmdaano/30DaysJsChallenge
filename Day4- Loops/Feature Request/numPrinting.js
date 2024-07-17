oneToTenForLoop:
for (let index = 1; index <= 10; index++) {
    process.stdout.write(`${index} `);
}

console.log();  //work for a newline
let i = 1;

oneToTenWhileLoop:
while (i <= 10) {
    process.stdout.write(`${i} `);
    i++;
}