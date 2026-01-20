import { useEffect, useRef, useState } from "react";
import "./Open.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

function Open() {
  const inputRef = useRef();
  const [weatherdata, setweatherdata] = useState(false);

  const [favData, setFavData] = useState(() => {
    const saved = localStorage.getItem("favData");
    return saved ? JSON.parse(saved) : [];
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const savedWeather = JSON.parse(localStorage.getItem("weatherdata"));
    if (savedWeather) {
      setweatherdata(savedWeather);
    }

    const savedFav = JSON.parse(localStorage.getItem("favData"));
    if (savedFav) {
      setFavData(savedFav);
    }
  }, []);

  function AddFavv(newData) {
    setFavData((weatherdata) => [...weatherdata, newData]);
  }

  const ApiKey = "87c6e5db41cc3ad5da364d6a15b705a1";

  const search = async (event) => {
    event.preventDefault(); // Prevents the browser from reloading the page
    const city = inputRef.current.value;

    if (city === "") {
      alert("ullupp undo da");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      setweatherdata({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: data.main.temp,
        location: data.name,
      });
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    if (weatherdata) {
      localStorage.setItem("weatherdata", JSON.stringify(weatherdata));
    }
  }, [weatherdata]);

  useEffect(() => {
    localStorage.setItem("favData", JSON.stringify(favData));
  }, [favData]);

  return (
    <div className="Weather">
      <div className="search-bar">
        <form className="src-btn" onSubmit={search}>
          <Link to="about"
          state={{ favData }}>
            <MdOutlineFavorite
              className="fav-icon"
              // onClick={() => AddFavv(weatherdata.location)}
            />
          </Link>

          <input ref={inputRef} type="text" placeholder="search" />
          <CiSearch type="submit" className="search-icon" />
        </form>
      </div>

      <h1 className="city-font">{error && "City not found"}</h1>

      <img
        src="/images/sun-39.png"
        alt=""
        className="weather-icon"
      />

      <p className="temperature">
        {weatherdata.temperature}°C
      </p>

      <div className="btn-slide">
        <p className="location">{weatherdata.location}</p>
<div className="favr">
       <MdOutlineFavorite
  className="favr-icon"
  onClick={() => AddFavv(weatherdata)}
/>
<span class="favr-text">FAV</span>
</div>
      </div>

      <div className="weather-data">
        <div className="col">
          <img src="/images/humidity.png" alt="" height="40" />
          <div>
            <p>{weatherdata?.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src="/public/images/width.jpeg" alt="" height="30" />
          <div>
            <p>{weatherdata.windspeed}km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Open;
