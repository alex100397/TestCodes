const reverseString = (arr) => {
    let n = arr.length;
    for (let i = 0; i < Math.floor(n) / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
    }
    return arr;
}

console.log(reverseString(['a', 'l', 'e', 'x']))