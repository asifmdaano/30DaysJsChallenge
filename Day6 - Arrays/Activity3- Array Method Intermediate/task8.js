const main = () => {
    let arr = [1, 2, 3, 4, 5];
    // filter method is used to create an array with certain condition without affection old one. 
    let updatedArr = arr.filter(val => val % 2 == 0);

    // Original array
    console.log(`Original array: ${arr}`);
    // Updated array
    console.log(`Updated array: ${updatedArr}`);
};

main();