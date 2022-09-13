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
    function handleOnSearchChange(searchData){
        const cityStateCountry = searchData.label
        // console.log(searchData);
        const[lat,lon] =searchData.value.split(" ");
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?q=${cityStateCountry}&appid=${WEATHER_API_KEY}&units=metric`)
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?q=${cityStateCountry}&appid=${WEATHER_API_KEY}&units=metric`)
        // const 
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
    // console.log(forecast);
  return (
    <div className='app'>
        <div className='domain-wrapper'>
            <Search onSearchChange={handleOnSearchChange}/>
            {currentWeather && <CurrentWeather data={currentWeather}/>}
            {forecast && <Forecast data={forecast}/>}
        </div>
    </div>
  )
}
