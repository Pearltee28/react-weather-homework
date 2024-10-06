import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Moderate Rain</li>
      </ul>
      <div className="row">
        <div className="col-6 weather-app-temperature-container">
          <div className="weather-app-icon">☀️</div>
          <div className="weather-app-temperature">16</div>
          <div className="weather-app-unit">°C</div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
