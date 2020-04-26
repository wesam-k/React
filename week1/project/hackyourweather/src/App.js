import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherCard from "./weatherCard";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1
        className="weatherHeader"
        style={{ textAlign: "center", padding: "1em" }} >
        Weather
      </h1>

      <WeatherCard />
    </div>
  );
}

export default App;
