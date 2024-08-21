let bookTitle = "title";
let bookAuthor = "author";
let funOne = "writtenBy";

// uses computed property to take dynamically values of a variable by [] as keys
let book = {
    [bookTitle]: "Wings of fire",
    [bookAuthor]: "APJ Abdul Kalam",
    [funOne]: (title, author) => `${title} by ${author}.`
};

// log the object
console.log(book);