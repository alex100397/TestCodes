import React from 'react'

const Settings = (theme, setTheme) => {
  return (
    <div className='setting-form'>
      <input type='radio' value={theme} onChange={() => setTheme((prev) => !prev)}/> Dark
      <input type='radio' value={theme} onChange={() => setTheme((prev) => !prev)}/> Light
    </div>
  )
}

export default Settings