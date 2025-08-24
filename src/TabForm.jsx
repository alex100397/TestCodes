import React, { useState } from 'react';
import './TabForm.css'
import Profile from './Profile';
import Interests from './Interests';
import Settings from './Settings';

const TabForm = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    age: '',
  })
  const [interestData, setInterestData] = useState({
    'javascript': false,
    'tailwind': false,
    'next': false,
  })
  const [tabs, setTabs] = useState([
    {id: 1, name: 'Profile', component: Profile},
    {id: 2, name: 'Interests', component: Interests},
    {id: 3, name: 'Settings', component: Settings},
  ])
  const [theme, setTheme] = useState('')
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if(profileData.name === ''){
      errors.name = 'This field is required'
    }
    if(profileData.age === ''){
      errors.age = 'This field is required'
    }
    if(profileData.email === ''){
      errors.email = 'This field is required'
    }
    if(profileData.age < 18){
      errors.age = 'Invalid age';
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
  }

  console.log(profileData)

  const handlePrev = () => {
    setActiveTab((prev) => prev - 1);
  }

  const handleNext = () => {
    setActiveTab((prev) => prev + 1);
  }
  

const [activeTab, setActiveTab] = useState(1)
  return (
    <div className='tab-form'>
        {
            tabs.map((tab) => 
            <div onClick={() => setActiveTab(() => tab.id)} className='d-flex' key={tab.id}>
            <div className='tab'>
            {tab.name}
            </div>
            <div className='tab-content'>
            {activeTab === tab.id && tab.component(profileData, setProfileData, errors, interestData, setInterestData, theme, setTheme)}
            </div>
            </div>
            )
        }
        <div className='submit'>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <button type='submit'>Submit</button>
        </div>
    </div>

  )
}

export default TabForm