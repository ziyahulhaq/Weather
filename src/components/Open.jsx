import { useEffect, useRef, useState } from "react";
import "./Open.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavorite } from "react-icons/md";

function Open() {
  const inputRef = useRef();
  const [weatherdata, setweatherdata] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    try {
      const savedNotes = JSON.parse(localStorage.getItem("weatherdata"));

      if (savedNotes) {
        setweatherdata(savedNotes);
      }
    } catch (e) {
      console.error("Failed to parse saved notes", e);
    }
  }, []);

  const ApiKey = "87c6e5db41cc3ad5da364d6a15b705a1";

  const search = async (city) => {
    if (city === "") {
      alert("ullupp undo da");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log("ithuu", data);
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

  return (
    <div className="Weather">
      <div className="search-bar">
        <MdOutlineFavorite className="fav" />
        <input ref={inputRef} type="text" placeholder="search" />
        <CiSearch
          className="search-icon"
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      <h1 className="city-font">{error && "City not found"}</h1>
      <img src="/images/sun-39.png" alt="" className="weather-icon"></img>
      <p className="temperature">{weatherdata.temperature}°C</p>
      <p className="location">{weatherdata.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src="/images/humidity.png" alt="" height="40"></img>
          <div>
            <p>{weatherdata?.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src="/public/images/width.jpeg" alt="" height="30"></img>
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

// import { useEffect, useRef, useState } from "react";
// import "./Open.css";
// import { CiSearch } from "react-icons/ci";
// import { MdOutlineFavorite } from "react-icons/md";

// function Open() {
//   const inputRef = useRef();
//   const [weatherdata, setweatherdata] = useState(false);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     try {
//       const savedNotes = JSON.parse(localStorage.getItem("weatherdata"));
//       if (Array.isArray(savedNotes)) {
//         setweatherdata(savedNotes);
//       }
//     } catch (e) {
//       console.error("Failed to parse saved notes", e);
//     }
//   }, []);

//   const ApiKey = "87c6e5db41cc3ad5da364d6a15b705a1";

//   const search = async (city) => {
//     if (city === "") {
//       alert("ullupp undo da");
//       return;
//     }
//     try {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
//       const response = await fetch(url);
//       const data = await response.json();
//       // console.log("ithuu", data);
//       setweatherdata({
//         humidity: data.main.humidity,
//         windspeed: data.wind.speed,
//         temperature: data.main.temp,
//         location: data.name,
//       });
//     } catch (error) {
//       console.log(error);
//       setError(error);
//     }
//   };
//   // useEffect(() => {
//   //   search("valiyaparamba");
//   // }, []);

//     useEffect(() => {
//     localStorage.setItem("weatherdata", JSON.stringify(weatherdata));
//   }, [weatherdata]);

//   return (
//     <div className="Weather">
//       <div className="search-bar">
//         <MdOutlineFavorite
//           className="fav"
//           // onClick={}      <h1 className="city-font">{error &&  "City not found"}</h1>

//         />
//         <input ref={inputRef} type="text" placeholder="search" />
//         <CiSearch
//           className="search-icon"
//           onClick={() => search(inputRef.current.value)}
//         />
//       </div>
//       <h1 className="city-font">{error &&  "City not found"}</h1>
//       <img src="/images/sun-39.png" alt="" className="weather-icon"></img>
//       <p className="temperature">{weatherdata.temperature}°C</p>
//       <p className="location">{weatherdata.location}</p>
//       <div className="weather-data">
//         <div className="col">
//           <img src="/images/humidity.png" alt="" height="40"></img>
//           <div>
//             <p>{weatherdata?.humidity}%</p>
//             <span>Humidity</span>
//           </div>
//         </div>

//         <div className="col">
//           <img src="/public/images/width.jpeg" alt="" height="30"></img>
//           <div>
//             <p>{weatherdata.windspeed}km/h</p>
//             <span>Wind Speed</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Open;
