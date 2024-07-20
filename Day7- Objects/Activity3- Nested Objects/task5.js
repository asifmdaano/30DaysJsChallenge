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

    // log the library object to the console.
    console.log("Nested library object:",library);
}

main();