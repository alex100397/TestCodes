const secondLargest = (nums) => {
    if(nums.length < 2){
        return null;
    }
    let firstLargest = -Infinity;
    let secondLarge = -Infinity;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > firstLargest){
            secondLarge = firstLargest;
            firstLargest = nums[i];
        } else if (nums[i] > secondLarge && nums[i] !== firstLargest){
            secondLarge = nums[i]
        }
    }
    return secondLarge;
}

const nums = [1,2,52,324,3,34,5324, 123, 5324]

console.log(secondLargest(nums));


