import React, { useEffect, useState } from 'react'
import './ProgressBar.css'
const ProgressBar = ({progress}) => {
    const [animate, setAnimate] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setAnimate(progress)
        }, 1000)
    }, [progress])
  return (
    <>
        <div className='outer'>
            <div className='inner' style={{
                transform: `translateX(${animate-100}%)`, 
                background: 'green',
                // width: `${progress}%`,
                color: progress < 5 ? 'black' : 'white'
                }}
                role='progressbar'
                aria-valuemin={0}
                aria-valuemax={100}
                >
            {animate} %
            </div>
        </div>
    </>
  )
}

export default ProgressBar