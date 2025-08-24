const sumofNums = (n) => {
    if (n === 0) return 0;
    return n + sumofNums(n - 1);
} 

console.log(sumofNums(5));