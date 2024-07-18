const isCharInStr = (char, str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char.toLowerCase())
            return true;
    }
    return false;
};

const main = () => {
    let str = "Hello";
    let char = 'u';
    if (isCharInStr(char, str))
        console.log(`The character '${char}' exits in "${str}"`);
    else
        console.log(`The character '${char}' doesn't exit in "${str}"`);

};

main();