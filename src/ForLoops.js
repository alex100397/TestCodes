let n = 5;                                       
for (let i = 1; i<=n ; i++){
    let row = '';
    for(let j = 1; j<=i;j++){
        row += i;
    }
    // console.log(row);
} 
// o/p
// 1
// 22
// 333
// 4444
// 55555
for (let i = 1; i<=n ; i++){
    let row = '';
    for(let j = 1; j<=i;j++){
        row += j;
    }
    // console.log(row);
} 
// o/p
// 1
// 12
// 123
// 1234
// 12345
for (let i = 0; i<n;i++){
    let row = '';
    for (let j=0; j<=i; j++){
        row+=i+1;
    }
    // console.log(row);
}
// o/p
// 1
// 22
// 333
// 4444
// 55555
for(let i = 0; i<=n; i++){
    let row = '';
    for(let j = 0; j<n-i; j++){
        row+= j+1;
    }
    // console.log(row);
}
// 12345
// 1234
// 123
// 12
// 1
for (let i = 0; i <= n; i++) {
    let row = '';
    for (let j = 0; j <= n - (i + 1); j++) {
        row += '-'
    }
    for (let k = 0; k < i + 1; k++) {
        row += '*'
    }
    // console.log(row)
}
// -----*
// ----**
// ---***
// --****
// -*****
// ******
for (let i = 0; i <= n; i++) {
    let row = '';
    let switchRow = 1;
    for (let j = 0; j < i + 1; j++) {
        row += switchRow;
        if (switchRow === 1) {
            switchRow = 0;
        } else {
            switchRow = 1;
        }
    }
    console.log(row)
}
// 1
// 10
// 101
// 10101
let switchRow = 1;
for (let i = 0; i <= n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
        row += switchRow;
        if (switchRow === 1) {
            switchRow = 0;
        } else {
            switchRow = 1;
        }
    }
    console.log(row)
}
// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1