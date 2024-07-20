function main() {
    let studentInfo = {
        class10: [
            {
                name: "Hitesh",
                fName: "Ritesh",
                roll: "24CT012",

            },
            {
                name: "Musharraf",
                fName: "Zeeshan Ali",
                roll: "24CT013",

            },
            {
                name: "Sadaf",
                fName: "Hassan Mustafa",
                roll: "24CT014",

            },
        ],
        class9: [
            {
                name: "Aroosh",
                fName: "Badi Uzzama",
                roll: "24CS009",

            },
            {
                name: "Ashhar",
                fName: "Faroque raza",
                roll: "24CS010",

            },
            {
                name: "Haidar Ali",
                fName: "Amir Hamza",
                roll: "24CS016",

            },
        ]

    };

    // using for...in loop
    console.log("Using for...in loop:");
    for (let objKey in studentInfo) {
        console.log(`${objKey}:`);
        for(let student of studentInfo[objKey]){
            console.log(`\tName: ${student.name}`);
            console.log(`\tFather's Name: ${student.fName}`);
            console.log(`\tRoll no.: ${student.roll}\n`);
        }
    }

    // using Object.keys() and Object.values() method
    console.log("using Object.keys() and Object.values():");
    for(const gradeKey in studentInfo){
        console.log(`${gradeKey}:`);
        for(const student of studentInfo[gradeKey]){
            console.log(Object.keys(student));
            console.log(Object.values(student));
        }
    }

}

main();