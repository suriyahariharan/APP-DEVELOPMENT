import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate=useNavigate();
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo1.png" alt="logo" width={120} />
             <div className="flexCenter h-menu">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/login">Get Started</a>
                <button className='buttons' onClick={()=>navigate("/help")}>
                    Help Center
                </button>
             </div>
        </div>
    </section>
  )
}

export default Header