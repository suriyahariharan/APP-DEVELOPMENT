import React from 'react'
import FeaturedCard from './FeaturedCard'
import "./Featured.css"
import Header from '../Header/Header'
const Services = () => {
  return (
    <section className='services mb'>
        <Header/>
        <h className='flexCenter paddings innerWidth primaryText'>Services</h>
        <p className='flexCenter paddings innerWidth orangeText'>Provided Services</p>
        <div className="paddings featured container">
            <FeaturedCard/>
        </div>
    </section>
  )
}

export default Services