function main() {
    // create an 2D array
    const studentInfo = [["Name", "RollNo", "Class"],
                         ["Siraj", "24BAM08", 6],
                         ["Sadaf", "24BHM015", 10]];
    // initial 2D array
    console.table(studentInfo);

    //first row or first element of array studentInfo
    console.log(studentInfo[0]);   // ["Name", "RollNo", "Class"]

    //last row or last element of array studentInfo
    console.log(studentInfo[studentInfo.length - 1]);   // ["Sadaf", "24BHM015", 10]

    // use an array to generate a message
    console.log(`The student "${studentInfo[1][0]}" is studying in class ${studentInfo[1][2]}th.`);
    console.log(`The student "${studentInfo[2][0]}" has roll no. '${studentInfo[2][1]}'.`);

    // log diagonal item of 2D array
    console.log("\nDiagonal Item of a 2D array:");
    for (let i = 0; i < studentInfo.length; i++) {
        for (let j = 0; j < studentInfo.length; j++) {
            if (i === j)
                console.log(studentInfo[i][j]);
        }
    }

}

main();