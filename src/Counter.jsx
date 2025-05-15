import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    function makeCounter(initialValue = 0) {
        let value = initialValue
        return {
            increment: () => {
                ++value;
                return value;
            },
            decrement: () => {
                value--;
                return value;
            },
            reset: () => {
                value = initialValue
                return value
            }
        }
    }
    
    const counter = makeCounter(count);
  return (
    <>
    <div>Counter</div>
        <input value={count} onChange={(e) => setCount(e.target.value)}/>
        <button onClick={() => setCount(counter.increment())}>Increment</button>
        <button onClick={() => setCount(counter.decrement())}>Decrement</button>
        <button onClick={() => setCount(counter.reset())}>Reset</button>
        <div>{count}</div>
    </>
  )
}

export default Counter