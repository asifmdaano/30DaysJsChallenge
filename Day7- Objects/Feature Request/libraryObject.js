function main() {
    // create an nested array.
    let library = {
        name: "Book catalog",
        books: [
            {
                title: "Clean Code",
                author: "Robert C. Martin",
                year: 2008
            },
            {
                title: "The Pragmatic Programmer",
                author: "Andrew Hunt and David Thomas",
                year: 1999
            },
            {
                title: "JavaScript: The Good Parts",
                author: "Douglas Crockford",
                year: 2008
            },
        ]
    }

    // a method to get book details
    library.getBookInfo = function () {
        for (let i = 0; i < library.books.length; i++) {
            let bookItem = library.books[i]
            console.log(`Book ${i + 1}:`);
            for (const items in bookItem) {
                console.log(`\t${items}: ${bookItem[items]}`);

            }

        }
    };

    // a method to add a new book at the end of catalog.
    library.addBook = function (title, author, year) {
        this.books.push({ title, author, year });
    };

    // a method to remove a certain book from the catalog.
    library.removeBook = function (title) {
        this.books = this.books.filter(book => 
            (book.title).toLowerCase() !== title.toLowerCase());
    };

    // add method to get titles of the book
    library.getBookTitle = function(){
        return this.books.map(item => item.title);
    }

    // initial catalog
    console.log("\nInitial catalog:");
    library.getBookInfo();

    // updated catalog
    console.log("\nUpdated catalog:");
    library.addBook("Machine Learning Yearning","Andrew Ng",2021);
    library.getBookInfo();

    // final catalog
    console.log("\nFinal Catalog:");
    library.removeBook("clean code");
    library.getBookInfo();

    // Know last book details
    console.log("Last book's details:",library.books[library.books.length-1]);

    // store title of the book object.
    let getTitle = library.getBookTitle();
    console.log("Books in our library:",getTitle);



}

main();