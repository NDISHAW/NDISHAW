import React from 'react'
import Footer from './Footer/Footer';
import Profile from './Profile';
import "./Home"
import Home from '../../../.history/src/PortfolioContainer/Home/Home_20220713142547';

function Home() {
  return (
    <div className='home-container'>
        <Profile />
        <Footer />
    </div>
  )
}

export default Home