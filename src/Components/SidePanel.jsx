import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const SidePanel = ({updateWeatherInfo}) => {
    const [city, setcity] = useState("");
    let [error,setError] = useState(false);

    // API call to fetch weather data based on city name
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = import.meta.env.VITE_API_KEY;

    const handleChange = (e) => {
        setcity(e.target.value);
        setError(false);
    }

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${apiKey}&units=metric`);
            let data = await response.json();
            let result = {
                city:city,
                weatherStatus: data.weather[0].main,
                temperature: data.main.temp,
                minTemperature: data.main.temp_min,
                maxTemperature: data.main.temp_max,
                cloudStatus: data.clouds.all,
                windStatus: data.wind.speed,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                humidity: data.main.humidity,
                visibility: data.visibility,
                pressure: data.main.pressure,
            }
            return result;
        }catch(error){
            throw(error);
        }
    }

    const handleSubmit = async (e) => {
        try{
            e.preventDefault(); 
            setcity(""); 
            let weatherInfo = await getWeatherInfo();
            updateWeatherInfo(weatherInfo);
        }catch(error){
            alert('Something went wrong');
            setError(true);
        }
    }

    

  return (
    <div className='md:fixed md:top-0 md:left-0 md:w-1/3 w-full bg-[#fffffd] h-screen flex flex-col justify-center items-center'>
        <div className='relative h-1/3 items-center flex justify-center'>
            <img className='h-full ' src="/assets/weatherHome.webp" alt="" />
        </div>
        <div className='relative h-1/3 flex flex-col 2xl:gap-5 gap-3 w-[90%] rounded-2xl 2xl:px-6 2xl:py-5 py-2'>
            <h2 className='text-4xl text-center font-bold font-serif'>Search for Places</h2>
            <form className='relative flex flex-col  2xl:gap-5 gap-2 md:px-3 w-full' onSubmit={handleSubmit}>
                <label className='text-md 2xl:text-xl pl-3 font-semibold font-sans' htmlFor="search-box">Enter city name</label>
                <input 
                className='p-2 2xl:p-5 bg-gray-100 rounded-xl text-sm 2xl:text-lg pl-12 2xl:pl-16 mb-2'
                type="text" 
                id='search-box' 
                placeholder='Eg: Delhi' 
                value={city}
                onChange={handleChange}
                />
                <i className="absolute text-xl 2xl:text-3xl top-9 2xl:top-16 md:left-8 left-4 ri-search-line"></i>

                <div className='flex gap-3 item center'>
                    <button className='bg-black flex justify-center text-white font-semibold 2xl:py-2 py-1 px-10 rounded-full w-1/3 '>Search</button>
                    {error && <p style={{color:"red"}}>City Not Found !</p>}
                </div>
            </form>
            <h4 className='relative top-20 text-center font-semibold text-sm md:hidden'>Scroll to see details <i className="text-lg ri-arrow-down-line"></i></h4>
        </div>

        <div className='relative h-1/3  w-full flex justify-center items-center'>
            <img className='h-[80%] rounded-2xl' src="/assets/animatedCar.gif" alt="" />
        </div>
    </div>
  )
}

export default SidePanel