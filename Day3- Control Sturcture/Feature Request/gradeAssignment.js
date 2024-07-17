let grade;
let score = 57;
switch (true) {
    case (score > 90 && score <= 100):
        grade = "A+";
        break;
    case (score > 80 && score <= 90):
        grade = "A";
        break;
    case (score > 75 && score <= 80):
        grade = "B+";
        break;
    case (score > 60 && score <= 75):
        grade = "B";
        break;
    case (score >= 40 && score <= 60):
        grade = "C";
        break;
    case (score < 40):
        grade = "F";
        break;
    default:
        console.log("wrong Input, Try again!");
}

console.log(`You secured grade ${grade}`);