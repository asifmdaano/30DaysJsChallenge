function main() {
    // create a nested object
    let book = {
        title: "Clean Code",
        author: "Robert C. Martin",
        year: 2008
    };

    // add a method to object.
    book.getTitleYear = function () {
        return `${this.title} in ${this.year}`;
    };

    // log the result of calling getTitleYear method.
    console.log(book.getTitleYear());

    // arrow function don't have 'this' context and give undefined value.
    // book.getTitleAuthor = () => {
    //     return `${this.title} is written by ${this.author}.`;
    // }
}

main();