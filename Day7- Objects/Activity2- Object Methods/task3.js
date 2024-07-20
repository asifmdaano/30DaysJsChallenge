function main() {
    // create an Object
    const book = {
        title: "Wings of fire",
        author: "APJ Abdul Kalam",
        year: 1999,
    };

    // add a method to object
    book.getTitleAuthor = function () {
        return `${book.title} by ${book.author}.`;
    };


    // log the result of calling the method
    console.log(book.getTitleAuthor());
}

main();