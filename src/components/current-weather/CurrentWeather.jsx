import "./current-weather.css"

import React from 'react'

export default function CurrentWeather(props) {
  const getTime = new Date();
  const localTime = getTime.getTime();
  const localOffset = getTime.getTimezoneOffset() * 60000
  const utc = localTime + localOffset
  const locationTimezone = utc + (1000 * props.data.city.timezone)
  const wtf = new Date(locationTimezone)


  // console.log(getTime);
  // console.log(localTime);
  // console.log(localOffset);
  // console.log(props);
  // console.log(localTime);
  console.log(wtf);

  function convertTemperature(temp){
    let convertedTemp = (temp - 273.15) * (9/5) + 32
    return Math.round(convertedTemp);
  }
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
        <p className="temperature">{convertTemperature(props.data.main.temp)}°F</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{convertTemperature(props.data.main.feels_like)}°F</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{props.data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{props.data.main.humidity}%</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}
