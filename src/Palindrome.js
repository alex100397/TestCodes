function validatePalindrome(str) {
    let revStr = str.split('').reverse().join('');
    console.log('str', str)
    console.log(revStr, 'revstr')
    if (revStr === str) return true;
    return false;
}

console.log(validatePalindrome("race a car"))

// const palindrome = (num) => {
//     if (num < 0) return false;
//     let n = num;
//     let rev = 0;
//     while (num > 0) {
//         let rem = num % 10;
//         rev = (10 * rev) + rem;
//         num = Math.floor(num / 10);
//     }
//     return n === rev
// }

// console.log(palindrome(121));