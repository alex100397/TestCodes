const missingNUmber = (arr) => {
    let n = arr.length;
    let totalSum = n * (n + 1) / 2;
    let partialSum = 0;
    for (let i = 0; i < n; i++) {
        partialSum = partialSum + arr[i];
    }

    return totalSum - partialSum;
}

console.log(missingNUmber([4, 0, 2, 1, 5]))