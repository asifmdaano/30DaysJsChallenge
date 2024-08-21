const hofTwo = (funOne, funTwo, value) => {
    return funTwo(funOne(value));
};

// funOne
const sqr = a => a ** 2;  // this function same as the following code. for single parameter parenthesis can be omitted and for single expression arrow function return the result of that expression.

// const sqr = (a) =>{
//     return a**2;
// };

// funTwo
const cube = a => a ** 3;

function main() {
    console.log(`result: ${hofTwo(sqr, cube, 2)}`);
}

main();