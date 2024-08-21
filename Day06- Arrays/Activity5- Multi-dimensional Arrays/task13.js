function main(){
    const arr = [["Apple", 2, 5],
                 [-2, "Mango", 3],
                 [-5, "Banana", 4]];
    
    console.log(arr[0][0]); // "Apple"
    console.log(arr[1][1]); // "Mango"
    console.log(arr[2][1]); // "Mango"

    console.log(arr[0]);    // row[1]: ["Apple",2,5]
    console.log(arr[1]);    // row[2]: [-2,"Mango",3]
    console.log(arr[2]);    // row[3]: [-5, "Banana", 4]

    console.log(arr[1][2]); // 3
    console.log(arr[2][0]); //-5
    console.log(arr[2][2]); // 4
}

main();