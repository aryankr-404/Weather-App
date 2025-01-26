import React from 'react'

const Wind = ({speed}) => {
  let speed_std;
  if (speed === '---') {
    speed_std = '---';
  } else {
    speed_std = (speed * 3.6).toFixed(1);
  }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
    <div className='relative bg-white rounded-2xl w-[80%] aspect-square p-5 shadow-lg'>
        <h4 className=' text-gray-400 font-semibold font-mono mb-2'>Wind status </h4>
        <h1 className='2xl:text-6xl text-4xl mb-4'>{speed_std}<span className='text-2xl'>km/h</span></h1>
        <img className='w-[30%] absolute bottom-3 rounded-xl' src="/src/assets/weatherIcons/wind.png" alt="" />
    </div>
    </div>
  )
}

export default Wind