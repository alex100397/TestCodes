import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const RouterTest = () => {
    const Home = () => {
        return <div>Welcome to Home Page</div>
    }
    const About = () => {
        return <div>Welcome to About Page</div>
    }
  return (
    <Router>
    <div>RouterTest</div>
        <ul style={{display: 'flex', gap: '1rem'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        </Routes>
    </Router>
  )
}

export default RouterTest