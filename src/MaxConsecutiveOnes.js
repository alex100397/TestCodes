const maxConsecutiveones = (arr) => {
    let max = 0;
    let curr = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 1) {
            curr++;
        } else {
            max = Math.max(curr, max);
            curr = 0;
        }
    }
    return Math.max(curr, max)
}

console.log(maxConsecutiveones([1,1,0,0,1,1,1,1]))

