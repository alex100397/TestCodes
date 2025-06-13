import React from 'react'

const Sum = () => {
    function sum(...args){
        if (args.length === 0) return 0;
        return args.reduce((a,b) => a+b);
    }

    const value = sum(1,2,3,4,5,6);
  return (
    <div>Sum : {value}</div>
  )
}

export default Sum