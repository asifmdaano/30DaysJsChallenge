function main(){
    // create an object.
    let book ={
        title: "You're Born to Blossom",
        author: "APJ Abdul Kalam",
        year: 2008
    };

    // add method to object
    book.getTitleAuthor = function(){
        return `Title: ${this.title}\nAuthor: ${this.author}
        `
    };

    // log the properties and method result.
    console.log(book.getTitleAuthor());

}

main();