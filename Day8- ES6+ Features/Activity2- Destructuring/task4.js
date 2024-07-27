function main() {
    const book = {
        title: "Sultan Salahuddin Ayyubi",
        author: "Maulana Mohammad Ismail Rehani"
    };

    // Original Object
    console.log("original object:", book)

    // Destructuring of an object
    const { title, author } = book;
    console.log(`'${title}' by ${author}`);
} main();