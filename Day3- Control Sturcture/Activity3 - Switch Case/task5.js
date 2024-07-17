let score = 75; // your score can be change
let grade
switch (true) {
    case (score > 90 && score <= 100):
        grade = 'A';
        break;
    case (score > 80 && score <= 90):
        grade = 'B';
        break;
    case (score > 60 && score <= 80):
        grade = 'C';
        break;
    case (score >= 45 && score <= 60):
        grade = 'D';
        break;
    case (score <= 45):
        grade = 'F';
        break;
    default:
        console.log("Invalid input,Try agian!");
}

console.log(`You secured grade ${grade}.`);