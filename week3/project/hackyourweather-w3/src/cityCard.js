import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CityName({ cityInfo, deleteCity }) {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273).toFixed(0);
  };
  return (
    <div className="CityName-compon">
      <h3>
        {cityInfo.name}, {cityInfo.sys.country}
        <span>
          <FontAwesomeIcon
            className="faicon"
            icon="times"
            onClick={() => deleteCity(cityInfo.id)}
          />
        </span>
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
