function main() {
    // create an Object
    const book = {
        title: "Wings of fire",
        author: "APJ Abdul Kalam",
        year: 1999
    };

    // Use properties of object
    console.table(`The book "${book.title}" is written by ${book.author} in ${book.year}.`);
}

main();