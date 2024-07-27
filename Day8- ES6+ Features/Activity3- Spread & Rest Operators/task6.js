// '...rest' it allows you to handle multiple or indefinite number of arguments in function.
const sum = (...arg) => {
    return arg.reduce((accumulator, currentVal) => {
        return accumulator + currentVal
    }, 0);
}


function main() {
    console.log(`sum: ${sum(5, 22, 32)}`);
    console.log(`sum: ${sum(5, 22, 13, 17)}`);
} main();