import { useEffect, useRef, useState } from "react";
import "./Open.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavorite } from "react-icons/md";

function Open() {
  const inputRef = useRef();

  const [weatherdata, setWeatherData] = useState(null);
  const [favData, setFavData] = useState([]);
  const [error, setError] = useState("");

  /* ---------- Load weather data on refresh ---------- */
  useEffect(() => {
    const savedWeather = JSON.parse(localStorage.getItem("weatherdata"));
    if (savedWeather) {
      setWeatherData(savedWeather);
    }

    const savedFav = JSON.parse(localStorage.getItem("favData"));
    if (savedFav) {
      setFavData(savedFav);
    }
  }, []);

  /* ---------- Save weather data ---------- */
  useEffect(() => {
    if (weatherdata) {
      localStorage.setItem("weatherdata", JSON.stringify(weatherdata));
    }
  }, [weatherdata]);

  /* ---------- Save favorite data ---------- */
  useEffect(() => {
    localStorage.setItem("favData", JSON.stringify(favData));
  }, [favData]);

  /* ---------- Add to favorites (NO HOOKS HERE) ---------- */
  function AddFavv(newData) {
    if (!newData) return;

    setFavData((prev) => {
      if (prev.includes(newData)) return prev; // avoid duplicates
      return [...prev, newData];
    });
  }

  /* ---------- Search API ---------- */
  const ApiKey = "87c6e5db41cc3ad5da364d6a15b705a1";

  const search = async (event) => {
    event.preventDefault();
    const city = inputRef.current.value;

    if (!city) {
      alert("City name required");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        setError("City not found");
        return;
      }

      setError("");
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: data.main.temp,
        location: data.name,
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="Weather">
      <div className="search-bar">
        <form onSubmit={search}>
          <input ref={inputRef} type="text" placeholder="search" />
          <CiSearch className="search-icon" />
        </form>
      </div>

      {error && <h1 className="city-font">{error}</h1>}

      {weatherdata && (
        <>
          <img src="/images/sun-39.png" alt="" className="weather-icon" />
          <p className="temperature">{weatherdata.temperature}°C</p>

          <div className="btn-slide">
            <p className="location">{weatherdata.location}</p>
            <MdOutlineFavorite
              className="fav"
              onClick={() => AddFavv(weatherdata.location)}
            />
          </div>

          <div className="weather-data">
            <div className="col">
              <img src="/images/humidity.png" alt="" height="40" />
              <div>
                <p>{weatherdata.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>

            <div className="col">
              <img src="/images/width.jpeg" alt="" height="30" />
              <div>
                <p>{weatherdata.windspeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Open;
