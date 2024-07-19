function main() {
    let arr = [1, 2, 3, 4, 5, 6];

    // Original array
    console.log(`Original array: ${arr}`);

    // unshift is used to insert the item at the beginning of the array.
    arr.unshift(0);
    
    // Updated array
    console.log(`Updated array: ${arr}`);
}

main()