import React, { useState } from "react";
import "./Home.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { TiRefresh } from "react-icons/ti";

const API_KEY = "87c6e5db41cc3ad5da364d6a15b705a1";

const Home = () => {
  const location = useLocation();
  const { favData: initialFavData } = location.state || {};

  const [favData, setFavData] = useState(initialFavData || []);

  const refreshWeather = async (city, index) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      const updated = [...favData];
      updated[index] = {
        location: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
      };

      setFavData(updated);
      localStorage.setItem("favData", JSON.stringify(updated));
    } catch (err) {
      console.log("Refresh error", err);
    }
  };

  return (
    <div className="Weather">
      <div className="search-bar">
        <Link to="/">
          <IoMdArrowRoundBack className="fav" />
        </Link>
      </div>

      {Array.isArray(favData) &&
        favData.map((item, index) => (
          <div className="card" key={index}>
            <TiRefresh
              className="favor"
              onClick={() => refreshWeather(item.location, index)}
            />

            <p className="location-card">{item.location}</p>
            <p className="temp-caed">{item.temperature}°C</p>
            <p className="humidity-card">{item.humidity}%</p>
            <p className="wind-card">{item.windspeed} km/h</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
