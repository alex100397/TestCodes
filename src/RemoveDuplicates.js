const removeDuplicatie = (arr) => {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {
            x = x + 1;
            arr[x] = arr[i];
        }
    }
    return (x + 1);
}

console.log(removeDuplicatie([1,1,1,2,2,2,3,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5]))