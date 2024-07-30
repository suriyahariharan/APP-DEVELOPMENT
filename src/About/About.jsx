import React from 'react';
import './About.css';
import Header from "../Header/Header"
import { FaBuilding, FaUsers, FaHandsHelping } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div>
        <Header/>
    <div className="about-section">
        <h1 className='flexCenter' >About Us</h1>
      <div className="flexStart about-content">
        {/* <div className="about-text">
          <h2 className='flexStart orangeText'>Our Agency Story</h2>
          <p>In the bustling world of real estate, finding the perfect home or investment property requires expert guidance. With a deep understanding of market trends and a commitment to client satisfaction, our team ensures a seamless experience from start to finish. Whether you're buying your first home, seeking a luxurious estate, or looking for a lucrative investment opportunity, we have the expertise to help you achieve your real estate goals. Contact us today to begin your journey toward finding your dream property.</p>
        </div> */}
        <div className="about-text">
  <h2 className='flexStart orangeText paddings innerWidth '>Our Agency Story</h2>
  <p className='flexStart paddings secondaryText'>In the bustling world of real estate, finding the perfect home or investment property requires expert guidance. With a deep understanding of market trends and a commitment to client satisfaction, our team ensures a seamless experience from start to finish</p>
  <ul className='innerWidth paddings'>
    <li className='secondaryText' >Extensive market knowledge and insights</li>
    <li className='secondaryText'>Personalized service tailored to your needs</li>
    <li className='secondaryText'>Comprehensive support from search to closing</li>
    <li className='secondaryText'>Strong network of industry professionals</li>
  </ul>
</div>

        <div className="about-image">
          <img src="./immio.jpg" alt="" width={600}/>
        </div>
      </div>
      <div className="about-icons">
        <div className="icon-item">
          <FaBuilding size={50} />
          <p>Property Management</p>
        </div>
        <div className="icon-item">
          <FaUsers size={50} />
          <p>Community Building</p>
        </div>
        <div className="icon-item">
          <FaHandsHelping size={50} />
          <p>Customer Support</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
