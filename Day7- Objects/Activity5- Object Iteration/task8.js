const main = function () {
    // create a nested object
    let book = {
        title: "Clean Code",
        author: "Robert C. Martin",
        year: 2008
    };

    // iterate over object.
    for (const item in book) {
        console.log(`${item}: "${book[item]}"`);
    }
};

main();