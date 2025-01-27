import React from 'react'
import WeatherImg from './WeatherImg'
import TempCard from './TempCard'
import WeatherStatus from './WeatherStatus'
import Cloud from './Cloud'
import Wind from './Wind'
import SunriseSet from './SunriseSet'
import Humidity from './Humidity'
import Visibility from './Visibility'
import Pressure from './Pressure'

const MainPanel = (props) => {
  let info = props.weather;

  return (
    <div className='md:absolute md:top-0 md:right-0 md:w-2/3 bg-[#f6f6f8] min-h-screen overflow-y-scroll p-5 px-10 w-full relative'>
        <h1 className='text-3xl  font-mono'>Today's Forecast - {info.city.toUpperCase()} </h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5 xl:px-14'>

            
            <WeatherImg temp={info.temperature} />
            <WeatherStatus weatherStatus={info.weatherStatus} />
            <TempCard temperature={info.temperature} minTemp={info.minTemperature} maxTemp={info.maxTemperature} />
            <Cloud cloud={info.cloudStatus} />
            <Wind speed={info.windStatus}/>
            <SunriseSet rise={info.sunrise} set={info.sunset}/>
            <Humidity humidity={info.humidity}/>
            <Visibility visibility={info.visibility}/>
            <Pressure pressure={info.pressure}/>
        </div>
    </div>
  )
}

export default MainPanel