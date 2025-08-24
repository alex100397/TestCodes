import React from 'react'

const Interests = (interestData, setInterestData) => {
  return (
    <div className='interest-form'>
      <input type='checkbox' onChange={() => setInterestData((prev) => ({...interestData, 'javascript': !prev.javascript}))} />Javascript
      <input type='checkbox' onChange={() => setInterestData((prev) => ({...interestData, 'tailwind': !prev.tailwind}))} />Tailwind
      <input type='checkbox' onChange={() => setInterestData((prev) => ({...interestData, 'next': !prev.next}))} />Next.js
    </div>
  )
}

export default Interests