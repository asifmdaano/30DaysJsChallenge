const double = val=> val*2;


const main = function(){
    let arr = [1,2,3,4,5];

    // map method define as to callback each element of the array and result a new array without effecting original array.
    let doubleArr = arr.map(double);

    // Original array
    console.log(`Original array: ${arr}`);
    // Updated array
    console.log(`Updated array: ${doubleArr}`);
};

main()