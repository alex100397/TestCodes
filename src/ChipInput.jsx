import React, { useState } from 'react'
import './ChipInput.css';

const ChipInput = () => {
    const [chip, setChip] = useState('');
  const [chips, setChips] = useState([]);
  const handleChips = (e) => {
    if (e.key === 'Enter' && chip.trim()) {
      e.preventDefault();
      setChips((prev) => [...prev, chip.trim()])
      setChip('')
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
    <h2>Chips Input</h2>
    <input
      type="text"
      placeholder="Type a chip and press Enter"
      style={{ padding: "8px", width: "200px" }}
      value={chip}
      onChange={(e) => setChip(e.target.value)}
      onKeyDown={handleChips}
    />
    <div className='chips'>
      {chips.map((chip, index) => <div className='chips-tag'>
        <div>{chip}</div>
        <div className='cross' onClick={() => {setChips(chips.filter((_, filterIndex) => index !== filterIndex))}}>X</div>
      </div>)}
    </div>
  </div>
  )
}

export default ChipInput