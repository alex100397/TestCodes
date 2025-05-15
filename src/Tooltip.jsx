import React, { useState } from 'react'
import './Tooltip.css'

const Tooltip = () => {
    const [hover, setHover] = useState('')
    const icons = [
      { emoji: '🏠', label: 'Home' },
      { emoji: '📧', label: 'Email' },
      { emoji: '⚙️', label: 'Settings' }
    ];
    
    return (
    <>
    <h1>Tooltip</h1>
      <div className="tooltip-container">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="tooltip-item"
            onMouseEnter={() => setHover(icon.label)}
            onMouseLeave={() => setHover('')}
          >
            {hover === icon.label && <div className='tooltip-box'>{icon.label}</div>}
            <span>{icon.emoji}</span>
  
          </div>
        ))}
      </div>
      </>
    );
}

export default Tooltip