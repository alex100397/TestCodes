import React, { useEffect, useState } from 'react'

const Guessnumber = () => {
    const [number, setNumber] = useState('')
    const [msg, setMsg] = useState('')
    const [count, setCount] = useState(0)
    const [randomNum, setRandomNum] = useState(0)
    
    const randomNumber = () => Math.floor((Math.random() * 100) + 1);

    useEffect(() => {
        setRandomNum(randomNumber())
    }, [])
    const handleGuess = () => {
        const currentCount = count + 1;
        setCount(currentCount);
      if (number < 1 || number > 100) {
        setMsg('Please enter a number between 1 and 100')
      } else if (randomNum === Number(number)) {
        setMsg(`Congragulations! You guessed the number in ${currentCount} attempts`)
        setCount(0)
      } else if (randomNum < Number(number)) {
        setMsg('Too high! Try again')
      }
      else if (randomNum > Number(number)) {
        setMsg('Too low! Try again')
      }
      
    };
  
    const resetGame = () => {
      setRandomNum(randomNumber())
      setCount(0)
      setNumber('')
      setMsg('')
    };
  
    return (
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0"}}>
        <h2>Guess the Number</h2>
        <input
          placeholder="Enter a number between 1 and 100"
          style={{width:"300px",padding:"5px"}}
          id="guess-input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type='number'
        />
        <div className='button-group' style={{padding: '20px', gap: '3rem', display: 'flex'}}>
        <button onClick = {handleGuess}>Check Guess</button>
        <button onClick = {resetGame}>Reset Game</button>
        </div>
        {msg.length > 0 && <p>{msg}</p>}
      </div>
    );
}

export default Guessnumber