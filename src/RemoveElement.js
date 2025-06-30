const removeElemets = (arr, val) => {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[x] = arr[i];
            x = x + 1;
        }
    }
    return x;
}

console.log(removeElemets([0, 1, 2, 3, 4, 5], 0))