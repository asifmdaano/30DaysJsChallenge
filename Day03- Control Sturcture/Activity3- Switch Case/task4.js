console.log("\tChoose day of the week based on a number(1-7)");

let day = [1, 2, 3, 4, 5, 6, 7];
switch (day[2]) {
    case 1:
        console.log("It's Monday.");
        break;
    case 2:
        console.log("It's Tuesday.");
        break;
    case 3:
        console.log("It's Wednesday.");
        break;
    case 4:
        console.log("It's Thursday.");
        break;
    case 5:
        console.log("It's Friday.");
        break;
    case 6:
        console.log("It's Saturday.");
        break;
    case 7:
        console.log("It's Sunday.");
        break;
    default:
        console.log("wrong Input, Try again!");
}