const sumOfArr = (n) => {
    if (n === 0) return arr[n];
    return arr[n] + sumOfArr(n - 1)
}

const arr = [5, 4, 3, 2, 1]

console.log(sumOfArr(arr.length - 1))

//Sum of arr with odd no.s

const sumOfOddArr = (n) => {
    let isOdd = arr[n] % 2 !== 0;
    if (n === 0) {
        return isOdd ? arr[n] : 0
    } return (isOdd ? arr[n] : 0) + sumOfOddArr(n - 1)
}

const arr2 = [5, 4, 3, 2, 1]

console.log(sumOfOddArr(arr2.length - 1))