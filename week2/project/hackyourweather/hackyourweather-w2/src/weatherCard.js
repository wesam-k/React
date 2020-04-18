import React, { useState } from "react";
import "./App.css";

export default function CityData() {
  const [city, setCity] = useState();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [citySearch, setCitySearch] = useState("");

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

  const reqCity = () => {
    setLoading(true);
    return fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
        setInputValue("");
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  function CityName(props) {
    return (
      <div className="compon">
        <h3>
          {props.name}, {props.sys.country}
        </h3>
        <div>
          <h4>{props.weather[0].main}</h4>
          <main>{props.weather[0].description}</main>
        </div>
        <div className="part2">
          <p>
            <pre>min_temp: {props.main.temp_min}</pre>
          </p>
          <p>
            <pre>max_temp: {props.main.temp_max}</pre>
          </p>
          <p>
            <pre>
              location: {props.coord.lon}, {props.coord.lat}
            </pre>
          </p>
        </div>
      </div>
    );
  }

  const SearchCityName = ({ newCity }) => {
    return (
      <form>
        <input
          type="text"
          placeholder="Search City"
          value={citySearch}
          onChange={(event) => {
            setCitySearch(event.target.value);
          }}
        />

        <button
          onClick={(event) => {
            event.preventDefault();
            newCity(citySearch);
            setCitySearch(" ");
          }}
        >
          Search
        </button>
      </form>
    );
  };

  return (
    <div className="">
      {city && <CityName props={city} />}
      {<SearchCityName newCity={reqCity} />}
      {<h2>{inputValue}</h2>}
      {isLoading && <p> loading...!!! just waiting </p>}
      {hasError && <p> something is wrong</p>}
    </div>
  );
}


