const largestNumber = (nums) => {
    let largest = -Infinity;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
    return largest;
}

const nums = [3,10,25,30,34,40]

console.log(largestNumber(nums))