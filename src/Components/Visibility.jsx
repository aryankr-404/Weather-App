import React from 'react'

const Visibility = ({visibility}) => {
  let visibility_km;
  if(visibility === '---'){
    visibility_km = '---';
  }
  else{
    visibility_km = (visibility / 1000).toFixed(1);
  }
  
  
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
    <div className='relative bg-white rounded-2xl w-[80%] aspect-square p-5 shadow-lg'>
        <h4 className=' text-gray-400 font-semibold font-mono mb-2'>Visibility  </h4>
        <h1 className='2xl:text-7xl text-4xl  mb-4'>{visibility_km}<span className='text-2xl'>km</span> </h1>
        <img className='w-[30%] absolute bottom-3 rounded-xl' src="/assets/weatherIcons/eye.png" alt="" />
    </div>
    </div>
  )
}

export default Visibility