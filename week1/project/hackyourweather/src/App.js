import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherCard from "./weatherCard";

function App() {
  return (
    <div className="App">
      <h1 className="weatherHeader">Weather</h1>
      <WeatherCard />
    </div>
  );
}

export default App;
