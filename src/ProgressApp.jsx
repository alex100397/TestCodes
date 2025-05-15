import React from 'react'
import ProgressBar from './ProgressBar';

const ProgressApp = () => {
    const bars = [0, 10, 20, 5, 65, 70, 25, 80, 100];
  return (
    <>
    <h1>Progress  Bar</h1>
      {bars.map((value) => <ProgressBar key={value} progress={value}/>)}
      </>
  )
}

export default ProgressApp