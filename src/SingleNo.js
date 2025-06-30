//First Approach

// const singleNo = (arr) => {
//     const hash = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (!hash[arr[i]]) {
//             hash[arr[i]] = 1;
//         }
//         else {
//             hash[arr[i]]++;
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (hash[arr[i]] === 1) {
//             return arr[i]
//         }
//     }
// }

//Second 
const singleNo = (arr) => {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i]
    }
    return xor;
}

console.log(singleNo([1, 2, 3, 1, 2, 3, 4, 5, 5]))
