// import "./Hero.css";
// import { HiLocationMarker } from "react-icons/hi";
// import CountUp from "react-countup";
// import { motion } from "framer-motion";
// const Hero = () => {
//   return (
//     <section className="hero-wrapper">
//       <div className="paddings innerWidth flexCenter hero-container">
//         {/* left side */}
//         <div className="flexColStart hero-left">
//           <div className="hero-title">
//             <div className="orange-circle" />
//             <motion.h1
//             initial={{ y: "2rem", opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{
//               duration: 2,
//               type: "ease-in",
//             }}
//             >
//               Discover <br />
//               Most Suitable
//               <br /> Property
//             </motion.h1>
//           </div>
//           <div className="flexColStart secondaryText flexhero-des">
//             <span>Find a variety of properties that suit you very easilty</span>
//             <span>Forget all difficulties in finding a residence for you</span>
//           </div>

//           <div className="flexCenter search-bar">
//             <HiLocationMarker color="blue" size={25} />
//             <input type="text" />
//             <button className="button">Search</button>
//           </div>

//           <div className="flexCenter stats">
//             <div className="flexColCenter stat">
//               <span>
//                 <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
//               </span>
//               <span className="secondaryText">Premium Product</span>
//             </div>

//             <div className="flexColCenter stat">
//               <span>
//                 <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
//               </span>
//               <span className="secondaryText">Happy Customer</span>
//             </div>

//             <div className="flexColCenter stat">
//               <span>
//                 <CountUp end={28} /> <span>+</span>
//               </span>
//               <span className="secondaryText">Awards Winning</span>
//             </div>
//           </div>
//         </div>

//         {/* right side */}
//         <div className="flexCenter hero-right">
//           <motion.div
//             initial={{ x: "7rem", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{
//               duration: 2,
//               type: "ease-in",
//             }}
//             className="image-container"
//           >
//             <img src="./hero-image.png" alt="houses" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import CountUp from "react-countup";
import { motion } from "framer-motion";
import React,{useState} from "react";
const Hero = () => {
  // const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // const handleDropdownClick = (city) => {
  //   setInputValue(city);
  //   setShowDropdown(false);
  //   // Redirect to the respective city page
  //   window.location.href = `/${city.toLowerCase()}`;
  // };
  const handleSearch = () => {
    const city = inputValue.toLowerCase();
    if (city === 'coimbatore' || city === 'chennai' || city === 'bangalore') {
      window.location.href = `/${city}`;
    } else {
      alert('City not found');
    }
  };
  return (
    
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Discover <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
       {/* <div className="flexCenter search-bar">
        <HiLocationMarker color="blue" size={25} />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setShowDropdown(true)}
        />
        <button className="button">Search</button>
        <button className="dropdown-toggle" onClick={() => setShowDropdown(!showDropdown)}>
          {showDropdown ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
      </div>
      {showDropdown && (
        <div className="dropdown">
          <div onClick={() => handleDropdownClick('Coimbatore')}>Coimbatore</div>
          <div onClick={() => handleDropdownClick('Chennai')}>Chennai</div>
          <div onClick={() => handleDropdownClick('Bangalore')}>Bangalore</div>
        </div>
      )} */}
      <div className="flexCenter search-bar">
        <HiLocationMarker color="blue" size={25} />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="buttons" onClick={handleSearch}>Search</button>
      </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

