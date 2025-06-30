// const mergeArray = (num1, m, num2, n) => {
//     let n1Copy = num1.slice(0, m);
//     let p1 = 0;
//     let p2 = 0;
//     for(let i =0; i< m+n; i++){
//     if(p2>=n || p1<m && n1Copy[p1] < num2[p2]){
//         num1[i] = n1Copy[p1];
//         p1++
//     } else {
//         num1[i] = num2[p2];
//         p2++
//     }
// }
// return num1;
// }

const mergeArray = (num1, m, num2, n) => {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) break;
        if (p1 >= 0 && num1[p1] > num2[p2]) {
            num1[i] = num1[p1];
            p1--;
        } else {
            num1[i] = num2[p2];
            p2--;
        }
    }
    return num1;
}

console.log(mergeArray([1, 2, 3], 3, [4, 5, 6], 3))

console.log(mergeArray([1,2,3], 3, [5,6,7], 3))