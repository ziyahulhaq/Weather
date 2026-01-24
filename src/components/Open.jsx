import { useEffect, useRef, useState } from "react";
import "./Open.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { WiDayWindy } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";
import { FiSunrise } from "react-icons/fi";
import About from "./About";

function Open() {
  const inputRef = useRef();
  const [weatherdata, setweatherdata] = useState(false);
  // const [isOn, setIsOn] = useState(false);
  const [unit, setUnit] = useState("metric"); // metric | imperial

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
      console.log("hi");

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=${unit}`;
      const response = await fetch(url);
      const data = await response.json();

      setweatherdata({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: data.main.temp,
        location: data.name,
        pressure: data.main.pressure,
        sunrise: data.sys.sunrise,
      });
      setError("");
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
          <Link to="/home" state={{ favData }}>
            <MdOutlineFavorite className="fav-icon" />
          </Link>

          <input ref={inputRef} type="text" placeholder="search" />
          <CiSearch type="submit" className="search-icon" />
        </form>
      </div>

      <h1 className="city-font">{error && "City not found"}</h1>
      <div className="all-in"></div>

      {/* <img src="/images/sun-39.png" alt="" width="380px" height="260px" className="weather-icon" /> */}
      <div className="both-value">
        <p className="location-date">{weatherdata.location}</p>
        <p className="temperature">{weatherdata.temperature}°C</p>
      </div>
      <div className="btn-slide">
        <button
          className="glass-toggle"
          onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}
        >
          {unit === "metric" ? "°f" : "°c"}
        </button>

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
          <div className="humidity-p">
            <WiHumidity size={37} />
            <p>{weatherdata?.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="coll">
          <div className="wind-p">
            <GiPressureCooker size={37} />
            <p className="weather-data-prsr">{weatherdata.pressure}</p>
            <span className="prsr">pressure</span>
          </div>
        </div>

        <div className="colli">
          <div className="wind-p">
            {/* <GiPressureCooker size={37} /> */}
            <FiSunrise size={37}/>
            <p className="weather-data-rise">{weatherdata.sunrise}</p>
            <span className="prsr">sun</span>
          </div>
        </div>

        <div className="coll-prs">
          <div className="pressure-p">
            <WiDayWindy size={37} />
            <p className="pressure-data">{weatherdata.windspeed}km/h</p>
            <span className="wind-data">Wind</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Open;
