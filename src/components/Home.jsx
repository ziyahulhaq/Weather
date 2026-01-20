import React from 'react'
import "./Home.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const { favData } = location.state || {};
  console.log("khgvhjk" , favData);
  
        
  return (
     <div className="Weather">
              <div className="search-bar">
              <Link to={"/"}>
              <IoMdArrowRoundBack 
              className='fav'/>
              </Link>
              </div>
 {Array.isArray(favData) &&
  favData.map((item, index) => (
    <div key={index}>
      <p>{item.location}</p>
      <p>{item.temperature}°C</p>
      <p>{item.humidity}%</p>
      <p>{item.windspeed} km/h</p>
    </div>
  ))
}
     </div>
     
  )
}

                      
export default Home
                    







