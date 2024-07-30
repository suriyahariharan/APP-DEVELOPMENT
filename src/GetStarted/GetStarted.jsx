import React from "react";
import "./GetStarted.css";
import { useNavigate } from "react-router-dom";
const GetStarted = () => {
  const navigate=useNavigate();
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Urban Elite</span>
          <span className="secondaryText">
            Find your residence soon
          </span>
          <button className="buttons" onClick={()=>navigate("/register")}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
