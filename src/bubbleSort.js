const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return arr;
}

console.log(bubbleSort([5, 3, 6, 1, 4]))