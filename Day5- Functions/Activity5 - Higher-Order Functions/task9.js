const hof = (fun, times = 1) => {
    for (let i = 0; i < times; i++) {
        fun();
    }
};

const greetFun = function () {
    console.log(`Hello Buddy!`);
};

function main() {
    hof(greetFun, 4);
}

main();