const greet = function (name, age = 12) {
    const message = `Hello ${name}, You're ${age} years old.`;
    return message;
};

const main = () => {
    let name = "Saiful";
    let age = 15;
    console.log(greet(name, age));
};

main();