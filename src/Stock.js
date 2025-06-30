//Best time to buy and sell stocks - Greedy algorithm
const maxProfit = (a) => {
    let max = 0;
    let min = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] - min > max) {
            max = a[i] - min
        }
        if (a[i] < min) {
            min = a[i]
        }
    }
    return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))




