function greet(name) {
    return `Hello, ${name}!`;
};

(() => {
    const name = "Farman";
    const age = 23

    // using enhanced object literal introduced in  ES6+ features.
    const info = { name, age, greet };

    // access and log object info properties and method
    console.log(`${greet(info.name)} You're ${info.age} years old.`);
})();