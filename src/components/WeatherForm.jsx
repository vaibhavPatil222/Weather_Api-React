// WeatherForm.js
import React, { useState } from "react";

const WeatherForm = ({ getWeather }) => {
  const [cityInput, setCityInput] = useState("");

  const cityInputHandler = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <div>
      <h1>Weather Information API</h1>
      <label htmlFor="cityInput">Enter City:</label>
      <input
        type="text"
        id="cityInput"
        placeholder="Enter City Name"
        onInput={cityInputHandler}
      />
      <button onClick={() => getWeather(cityInput)}>Get Weather</button>
    </div>
  );
};

export default WeatherForm;
