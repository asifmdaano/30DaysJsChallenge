/*
+++++++++++++++++++++++
Leap year: - is divisible by 4
           - is divisible by 100 in not leap year unless it's  also divisible by 400.
*/

let year = 2024;
if (year % 4 === 0) {
    if (year % 100 != 0 || year % 400 === 0)
        console.log(`${year} is a leap year.`);
    else
        console.log(`${year} isn't a leap year.`);
}
else {
    console.log(`${year} isn't a leap year.`);
}