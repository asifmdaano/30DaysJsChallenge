let year = 2010;
if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0)
        console.log(`${year} is a leap year.`);
    else
        console.log(`${year} isn't a leap year.`);
}
else
    console.log(`${year} isn't a leap year.`);
