const reverseInt = (num) => {
    let n = num;
    num = Math.abs(num);
    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = (10 * rev) + rem;
        num = Math.floor(num / 10);
    }

    let limit = Math.pow(2, 31);
    if (rev < -limit || rev > limit) return 0;

    return n < 0 ? -rev : rev;
}

console.log(reverseInt(-123))