// WeatherApi.js
import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";

const WeatherApi = () => {
  const [apiData, setApiData] = useState({});

  async function getWeather(city) {
    const apiKey = "8af38ed232b1e0c6497b2b2550d7a2e9";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (!response.ok) {
        console.error("Error fetching weather data:");
      }
      const data = await response.json();
      console.log(data);
      setApiData(data);
    } catch (error) {
      console.log(error);
      setApiData({ error: error.message });
    }
  }

  return (
    <>
      <WeatherForm getWeather={getWeather} />
      <WeatherDisplay apiData={apiData} />
    </>
  );
};

export default WeatherApi;
