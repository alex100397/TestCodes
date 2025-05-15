import React from 'react'

const RouterTest = () => {
    const Home = () => {
        return <div>Welcome to Home Page</div>
    }
    const About = () => {
        return <div>Welcome to About Page</div>
    }
  return (
    <>
    <div>RouterTest</div>
    <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        </Routes>
    </Router>
    </>
  )
}

export default RouterTest