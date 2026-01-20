import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css";


const About = () => {
  return (
<div className="weather-start">
      <div className="weather-card">
        <h1>Weather Now</h1>
        <p>Get real-time weather updates for any city in the world</p>

        <Link to="about">
          <button className="weather-btn">Check Weather</button>
        </Link>
      </div>
    </div>
  );
};

export default About