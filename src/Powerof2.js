const powerOfTwo = (n) => {
    if (n === 1) return true;
    else if (n % 2 !== 0 || n < 1) return false;
    return powerOfTwo(n / 2)
}

console.log(powerOfTwo(2))