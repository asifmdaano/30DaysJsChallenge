const main = function () {
    // create a nested object
    let book = {
        title: "Clean Code",
        author: "Robert C. Martin",
        year: 2008
    };

    // use Object.keys method to extract all keys of object and store these in an array.
    let keys = Object.keys(book);
    console.log("All keys of book object:",keys);

    // use Object.value method to extract all values of object and store these in an array.
    let values = Object.values(book);
    console.log("All values of book object:",values);
};

main();