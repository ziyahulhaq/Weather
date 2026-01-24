import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css";
import { FaLocationDot } from "react-icons/fa6";
import { GrFormNext } from "react-icons/gr";




const About = () => {
  return (
<div className="weather-start">
      <div className="weather-card">
        <h1 className='open-page'>Weather Now</h1>
        <p className='date'>22,jan 2007</p>
                <p className='location'>INDIA</p>
        <FaLocationDot size={25} className='aim'/>

        <img className='weather-image' src='/images/Screenshot_from_2026-01-21_16-08-32-removebg-preview.png' width="550px" height="360px"></img>
        <div className='location-aim'>
</div>
                        <h1 className='home-num'>22°c</h1>

        <Link to="/open">
           <GrFormNext className='next'/>

          {/* <button className="weather-btn">Check Weather</button> */}
        </Link>
      </div>
    </div>
  );
};

export default About