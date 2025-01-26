import React from 'react'

const SunriseSet = ({rise, set}) => {
  let riseTime;
  let setTime;
  if(rise === '---'){
    riseTime = '---';
    setTime = '---';
  }
  else{
    riseTime = new Date(rise * 1000);  // Convert to milliseconds
    setTime = new Date(set * 1000);  // Convert to milliseconds
    riseTime =(riseTime.toLocaleTimeString());
    setTime = (setTime.toLocaleTimeString());
  }
  
  
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
    <div className='bg-white rounded-2xl w-[80%] aspect-square p-5 shadow-lg'>
        <h4 className=' text-gray-400 font-semibold font-mono mb-2'>Sunrise/Sunset</h4>
        <div className='flex  items-center '>
            <img className='w-[30%]' src="/assets/weatherIcons/sunrise.png" alt="" />
            <h2 className='2xl:text-xl ml-2'>{riseTime}</h2>
        </div>
        <div className='flex  items-center '>
            <img className='w-[30%]' src="/assets/weatherIcons/sunset.png" alt="" />
            <h2 className='2xl:text-xl ml-2'>{setTime}</h2>
        </div>
    </div>
    </div>
  )
}

export default SunriseSet