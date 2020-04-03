import React from "react";
import logo from "./logo.svg";
import "./App.css";
import cityWeather from "./city-weather.json";

function CityData() {
  return cityWeather.map((Object) => {
    // i used style here to lean how is it working and what is my mistake // of course i will use ass.css in future
    return (
      <div
        className="compon"
        style={{
          width: "450px",
          border: "1px solid black",
          textAlign: "left",
          marginBottom: "50px",
          paddingLeft: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h3>
          {Object.name}, {Object.sys.country}{" "}
        </h3>
        <div>
          <h4 style={{ marginTop: "5px", marginBottom: "0px" }}>
            {Object.weather[0].main}
          </h4>
          <main>{Object.weather[0].description}</main>
        </div>
        <div className="part2" style={{ marginTop: "20px", lineHeight: "1em" }}>
          <p>
            <pre>min_temp: {Object.main.temp_min}</pre>
          </p>
          <p>
            <pre>max_temp: {Object.main.temp_max}</pre>
          </p>
          <p>
            <pre>
              location: {Object.coord.lon}, {Object.coord.lat}
            </pre>
          </p>
        </div>
      </div>
    );
  });
}

export default CityData;
