import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default function CityCard({ cityInfo, deleteCity }) {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273).toFixed(0);
  };
  return (
    <div className="CityName-compon">
      <h3>
        <Link to={'/' + cityInfo.id}>
        {cityInfo.name}, {cityInfo.sys.country}
        </Link>
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

