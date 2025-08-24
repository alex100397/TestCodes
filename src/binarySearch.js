const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (right >= left){
        let middle = (left+right)/2;
        if(target === arr[middle]){
            return middle;
        } else if (target < arr[middle]){
            right = middle - 1
        } else {
            left = middle + 1;
        }
        return -1
    }
}

console.log(binarySearch([5,2,43,2,4],43))