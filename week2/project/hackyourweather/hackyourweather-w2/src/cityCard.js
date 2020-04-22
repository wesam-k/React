import React from "react";
import "./index.css";

export default function CityName({ cityInfo }) {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273).toFixed(0);
  };
  return (
    <div className="CityName-compon">
      <h3>
        {cityInfo.name}, {cityInfo.sys.country}
      </h3>
      <div>
        <h4>{cityInfo.weather[0].main}</h4>
        <main>{cityInfo.weather[0].description}</main>
      </div>
      <div className="part2">
        <pre>min_temp: {kelvinToCelsius(cityInfo.main.temp_min)} °C</pre>
        <pre>max_temp: {kelvinToCelsius(cityInfo.main.temp_max)} °C</pre>
        <pre>
          location: {cityInfo.coord.lon}, {cityInfo.coord.lat}
        </pre>
      </div>
    </div>
  );
}
