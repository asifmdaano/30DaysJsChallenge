for (let index = 1; index <= 10; index++) {
    if (index === 5)
        continue;
    process.stdout.write(`${index} `);
}