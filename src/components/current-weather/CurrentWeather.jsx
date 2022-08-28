import "./current-weather.css"

import React from 'react'

export default function CurrentWeather(props) {
  console.log(props);
  return (
    <div className="weather-wrapper">
      <div className="top">
        <div>
          <p className="city">{props.data.city.name}</p>
          <p className="weather-desc">{props.data.weather[0].description}</p>
        </div>
        <img src={`icons/${props.data.weather[0].icon}.png`} alt="weather" className="weather-icon"/>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(props.data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{props.data.main.feels_like}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{props.data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{props.data.main.humidity}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressure</span>
            <span className="parameter-value">{props.data.main.pressure}</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}
