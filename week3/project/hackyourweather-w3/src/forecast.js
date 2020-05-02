import React, { useState, useEffect } from "react";
import "./index.css";
import { useHistory, useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Forecast() {
  const [chart, setChart] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const { cityId } = useParams();

  useEffect(() => {
    const forecastCity = async () => {
      const API_KEY = process.env.REACT_APP_WEATHER;
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        setChart(data.list);
        setLoading(false);
      } catch (err) {
        console.log("err", err);
        setError(true);
        setLoading(false);
      }
    };

    forecastCity();
  }, [cityId]);

  function BackButton() {
    const history = useHistory();
    const handleBack = () => history.goBack();
    return (
      <button type="button" onClick={handleBack}>
        Back to Home
      </button>
    );
  }

  return (
    <div>
      <div>
        <AreaChart
          className="areaChart"
          width={800}
          height={600}
          margin={{ top: 50, right: 30, left: 30, bottom: 0 }}
          data={chart}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="dt_txt" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={(dataFromApi) => dataFromApi.main.temp}
            name="temp"
            stroke="red"
            fill="#ABF3AD"
          />
        </AreaChart>
        <BackButton />
      </div>
      {isLoading && <p> loading...!!! just waiting </p>}
      {hasError && <p> something is wrong</p>}
    </div>
  );
}
