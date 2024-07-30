import React from 'react'
import Header from "../Header/Header"
import "./Location.css"
import {list} from '../data/Data'
import { HiOutlineHome } from 'react-icons/hi';
const Coimbatore = () => {
  return (
    <div>
        <Header/>
        <h1 className='paddings innerWidth flexColCenter'>
     <HiOutlineHome /> Properties in Coimbatore
</h1>;
    <div className="location-container">
      {list.map((val, index) => {
        const { cover, category, location, name, price, type } = val
        return (
          <div key={index} className="location-item">
            <div className="img">
              <img src={cover} alt="" width={600} />
            </div>
            <div className="text">
              <div className="category flex">
                <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                <i></i>
              </div>
              <h4>{name}</h4>
              <p>
                <i></i> {location}
              </p>
            </div>
            <div className="price-container">
              <button className="price">{price}</button> <label>/sqft</label>
              <span className="type">{type}</span>
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}
export default Coimbatore;