function validatePalindrome(str) {
    let revStr = str.split('').reverse().join('');
    console.log('str', str)
    console.log(revStr, 'revstr')
    if (revStr === str) return true;
    return false;
}

console.log(validatePalindrome("race a car"))

