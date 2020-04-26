import React, { useState, useEffect } from "react";
import CityName from "./cityCard";
import "./index.css";

export default function CityData() {
  const [cityWeather, setCityWeather] = useState({});
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const API_KEY = process.env.REACT_APP_WEATHER;
  useEffect(() => {
    const getNewCity = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`
        );
        const data = await res.json();
        setCityWeather(data);
        setLoading(false);
      } catch (err) {
        console.log("err", err);
        setError(true);
        setLoading(false);
      }
    };
    getNewCity();
  }, [inputValue]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setInputValue(search);
    setSearch("");
  };

  return (
    <div className=" weatherCity">
      <h1>Weather</h1>
      <div>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            placeholder="   Search City"
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      {cityWeather.id && <CityName cityInfo={cityWeather} />}
      {isLoading && <p> loading...!!! just waiting </p>}
      {hasError && <p> something is wrong</p>}
    </div>
  );
}
