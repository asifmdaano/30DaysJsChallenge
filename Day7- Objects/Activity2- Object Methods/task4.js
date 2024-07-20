function main() {
    // create an Object
    const book = {
        title: "Wings of fire",
        author: "APJ Abdul Kalam",
        year: 1999,
    };

    // initial Object
    console.log("Initial object:",book);

    // add a method to object
    book.getTitleAuthor = function () {
        return `${book.title} by ${book.author}.`;
    };

    // a method to update object property
    book.updateBookYear = function(year){
        book.year = year;
    };

    // Update book object year
    book.updateBookYear(2024);

    // log the updated object
    console.log("Updated Object:",book);

}

main();