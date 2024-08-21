let a = 20, b = 10;
let operation = ['+', '-', '*', '/', '%'];

switch (operation[2]) {
    case '+':
        console.log(`sum: ${a + b}`);
        break;
    case '-':
        console.log(`Difference: ${a - b}`);
        break;
    case '*':
        console.log(`Multiplication: ${a * b}`);
        break;
    case '/':
        console.log(`Division: ${a / b}`);
        break;
    case '%':
        console.log(`remainder: ${a % b}`);
        break;
    default:
        console.log("Wrong Input, Try again!");

}