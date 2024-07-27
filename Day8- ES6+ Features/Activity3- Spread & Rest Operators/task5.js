(function main() {
    // create an array
    let colors = ["red", "blue", "green", "violet"];

    // Original array
    console.log("Original array:", colors);

    // use '...spread' Spread Operator with an existing array
    let newColors = [...colors, "white", "black", "yellow"];

    // New array
    console.log("New array:", newColors);
})();