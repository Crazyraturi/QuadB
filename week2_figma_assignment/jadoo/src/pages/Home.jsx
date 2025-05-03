import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Category from '../components/Category'

const Home = () => {
  return (
    <div className='relative min-w-screen overflow-hidden'>
      
      <HeroSection />
      <Category />
    </div>
  )
}

export default Home
