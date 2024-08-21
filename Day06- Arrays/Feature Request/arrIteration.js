function main() {
    // create an array
    let stationary = ["Pen", "Pencil", "Register", "Sharpener"];

    // log all item in the array with the help of for loop
    console.log("Using for loop:");
    for (let i = 0; i < stationary.length; i++) {
        console.log(stationary[i]);
    }

    console.log();

    // log all item in the array with the help of forEach method
    console.log("Using forEach method:");
    stationary.forEach(ele => {
        return console.log(ele)
    });
}

main();