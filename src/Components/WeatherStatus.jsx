import React from 'react'

const WeatherStatus = ({weatherStatus}) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
    <div className='bg-white rounded-2xl w-[80%] aspect-square p-5 shadow-lg'>
        <h4 className=' text-gray-400 font-semibold font-mono mb-2'>Weather Status</h4>
        
        <h1 className='2xl:text-6xl xl:text-5xl text-4xl mb-4'>{weatherStatus}</h1>
    </div>
    </div>
  )
}

export default WeatherStatus