//Iterative approach

// const fibonocci = (n) => {
//     let prepren, prevNo = 0, currentNo = 1;
//     for (let i = 2 ; i < n ; i++){
//         prepren = prevNo;
//         prevNo = currentNo;
//         currentNo = prevNo + prepren;
//     }
//     return currentNo;
// }

// console.log(fibonocci(5));

//Recursive approach

const fibonocci = (n) => {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonocci(n-1) + fibonocci(n-2);
}

console.log(fibonocci(5));