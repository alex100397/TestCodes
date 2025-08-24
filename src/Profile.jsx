import React from 'react'
import './TabForm.css'

const Profile = (profileData, setProfileData, errors) => {
  return (
    <div className='profile'>
        <div className='name'>
          <input type='text' placeholder='Enter Name' onChange={(e) => setProfileData({...profileData, name: e.target.value})}/>
          {errors.name && <div className='has-error'>{errors.name}</div>}
        </div>
        <div className='age'>
          <input type='number' placeholder='Enter Age' onChange={(e) => setProfileData({...profileData, age: e.target.value})} />
          {errors.age && <div className='has-error'>{errors.age}</div>}
        </div>
        <div className='email'>
        <input type='email' placeholder='Enter Email' onChange={(e) => setProfileData({...profileData, email: e.target.value})} />
        {errors.email && <div className='has-error'>{errors.email}</div>}
        </div>
    </div>
  )
}

export default Profile