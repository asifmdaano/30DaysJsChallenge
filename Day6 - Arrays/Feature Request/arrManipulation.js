const main = function () {
    // create an array
    let fruit = ["Cherry", "Lichi", "Kiwi"];

    // initial array
    console.log("Initial array:", fruit);

    // add an element to the end of array using push.
    fruit.push("Date");
    console.log("After push:", fruit);

    // remove an element to the end of array using pop.
    let lsatItem = fruit.pop();
    console.log("After pop:", fruit);
    console.log("Popped Item:", lsatItem);

    // remove an element to the beginning of array using shift.
    let firstItem = fruit.shift();
    console.log("After shift:", fruit);
    console.log("Shifted Item:", firstItem);

    // add an element to the beginning of array using unshift.
    fruit.unshift("Banana");
    console.log("After unshift:", fruit);
    
};

main();