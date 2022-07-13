import React from 'react'
import Footer from './Footer/Footer';
import Profile from './Profile';
import "./Home"

function Home() {
  return (
    <div className='home-container'>
        <Profile />
        <Footer />
    </div>
  )
}

export default Home