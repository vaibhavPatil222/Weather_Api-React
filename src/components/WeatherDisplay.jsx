// WeatherDisplay.js
import React from "react";

const WeatherDisplay = ({ apiData }) => {
  return apiData.name ? (
    <div id="weatherResult">
      <p>City: {apiData?.name}</p>
      <p>Temperature: {(apiData?.main?.temp - 273.15).toFixed(1)} &deg;C</p>
      <p>Weather: {apiData?.weather[0]?.description}</p>
    </div>
  ) : (
    <div>Enter a city name and click get weather button</div>
  );
};

export default WeatherDisplay;





