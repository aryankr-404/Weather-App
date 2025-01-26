import React from 'react'

const Humidity = ({humidity}) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
    <div className='relative bg-white rounded-2xl w-[80%] aspect-square p-5 shadow-lg'>
        <h4 className=' text-gray-400 font-semibold font-mono mb-2'>Humidity <span className='text-black font-normal'><i className="ri-rainy-line"></i></span> </h4>
        <h1 className='2xl:text-7xl text-4xl mb-4'>{humidity}<span className='text-2xl'>%</span> </h1>
        <img className='w-[30%] absolute bottom-3 rounded-xl' src="/assets/weatherIcons/humidity.png" alt="" />
    </div>
    </div>
  )
}

export default Humidity