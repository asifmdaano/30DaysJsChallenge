let dayOfTheWeek = [1, 2, 3, 4, 5, 6, 7];
switch (dayOfTheWeek[3]) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        console.log("wrong Input, Try again!");
}

console.log(`It's ${day} today.`);