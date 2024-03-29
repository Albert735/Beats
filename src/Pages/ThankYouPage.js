import React from 'react'
import Navbar from '../Components/Navbar'
import ThankYouSection from '../Sections/ThankYouSection'

const ThankYouPage = () => {
  return (
    <div className="dark:bg-[#0E0F10] dark:text-white bg-[#FFFAFA] h-full">
     <Navbar/>
     <ThankYouSection/>
    </div>
  )
}

export default ThankYouPage