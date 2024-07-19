function main() {
    //create an array
    const numArr = [3, 12, 6, 9];

    // initial array
    console.log("Initial array:", numArr);

    // use map method to create new array from initial array.
    const updatedMapArr = numArr.map(val => val / 3);
    console.log("Mapped array:", updatedMapArr);

    // use filter method to create new array with certain condition from initial array.
    const updatedFilterArr = numArr.filter(val => {
        return val <= 10;
    });
    console.log("Filtered array:", updatedFilterArr);

    // use reduce method to sun of all element of initial array.
    const sum = numArr.reduce((preValue, currValue) => {
        return preValue = preValue + currValue;
    }, 0);  // initial value of preValue is 0.
    console.log("sum:", sum);


}

main();