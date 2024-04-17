import React from 'react'
import { Navbar, MainSection } from '../components'
const Homepage = () => {
  return (
    <div className='homepage w-full h-screen flex flex-col'>
        <Navbar />
        <MainSection />
    </div>
  )
}

export default Homepage
