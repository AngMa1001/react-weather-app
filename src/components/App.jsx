import React, {useState} from 'react'
import "../App.css"
import "../browser_style_reset.css"
import CurrentWeather from './current-weather/CurrentWeather'
import Search from './search/Search'
import Forecast from './forecast/Forecast'
import { WEATHER_API_KEY, WEATHER_API_URL, HOURLY_WEATHER_API_URL, HOURLY_WEATHER_API_KEY } from './util/api'
export default function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const handleOnSearchChange = (searchData) =>{
        console.log(searchData);
        const[lat,lon] =searchData.value.split(" ");
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async(response)=>{
                const weatherResponse = await response[0].json();
                const forecastResponse= await response[1].json();
                
                setCurrentWeather({city: weatherResponse, ...weatherResponse});
                setForecast({city: forecastResponse, ...forecastResponse});
            })
            .catch(err => console.log(err)) ;
    }
    console.log(currentWeather);
    console.log(forecast);
  return (
    <div className='app'>
        <div className='domain-wrapper'>
            <h1 className='header'>Weathers</h1>
            <Search onSearchChange={handleOnSearchChange}/>
            {currentWeather && <CurrentWeather data={currentWeather}/>}
            {forecast && <Forecast />}
        </div>
    </div>
  )
}
