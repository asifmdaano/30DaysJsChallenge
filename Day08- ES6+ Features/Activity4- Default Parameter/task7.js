const product = function (numOne, numTwo = 1) {
    return numOne * numTwo;
};

(function main() {
    console.log(`with second parameter: ${product(5, 13)}`);
    console.log(`without second parameter: ${product(5)}`);
})();