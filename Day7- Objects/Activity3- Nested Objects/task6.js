function main() {
    // create a nested object
    let library = {
        name: "Samlan Ibn Mohammad",
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
    
    // access the name of library object.
    console.log("library name:",library.name);

    // create an array of titles of the books using map method.
    let booksTitle = library.books.map(val => val.title)

    // log all the title
    console.log("Title of all the books:",booksTitle);
}

main();