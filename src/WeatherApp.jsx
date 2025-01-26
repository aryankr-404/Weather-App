import React, { useState } from 'react'
import SidePanel from './Components/SidePanel'
import MainPanel from './Components/MainPanel'

const WeatherApp = () => {

    const [weather, setWeather] = useState(
        {
            city: '---',
            weatherStatus: '---',
            temperature: '---',
            minTemperature: '',
            maxTemperature: '',
            cloudStatus: '---',
            windStatus: '---',
            sunrise: '---',
            sunset: '---',
            humidity: '---',
            visibility: '---',
            pressure: '---'
        }
    )
    
    let updateWeatherInfo = (result) =>{
        setWeather(result);
    }

  return (
    <main>
     <SidePanel updateWeatherInfo={updateWeatherInfo} />
     <MainPanel weather={weather} />
   </main>
  )
}

export default WeatherApp