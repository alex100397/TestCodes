import React from 'react'

const FindMaxNum = () => {
    function findMaxNumber(arr) {
        if (arr.length === 0) return null;
        const maxValue = arr.reduce((a,b) => Math.max(a,b));
        return maxValue;
    }
       const value = findMaxNumber([1,2,3,4,5,6]);
    
  return (
    <div>FindMaxNum : {value}</div>
  )
}

export default FindMaxNum