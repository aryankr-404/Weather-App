import React from 'react'

const Pressure = ({pressure}) => {
  let std_pressure;
  if(pressure === '---'){
    std_pressure = '---';
  }
  else{
    std_pressure = (pressure * 0.02953).toFixed(1);
  }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
    <div className='relative bg-white rounded-2xl w-[80%] aspect-square p-5 shadow-lg'>
        <h4 className=' text-gray-400 font-semibold font-mono mb-2'>Air Pressure </h4>
        <h1 className='2xl:text-6xl text-4xl mb-4'>{std_pressure} <span className='text-lg'>mm Hg</span> </h1>
        <img className='w-[30%] absolute bottom-3 rounded-xl' src="/assets/weatherIcons/barometer.png" alt="" />
    </div>
    </div>
  )
}

export default Pressure