import React from 'react'

const TempCard = ({temperature, minTemp, maxTemp}) => {
  return (
    <div className='relative w-full h-full flex flex-col justify-center items-center'>
    <div className='relative bg-white rounded-2xl w-[80%] aspect-square p-5 shadow-lg'>
        <h4 className=' text-gray-400 font-semibold font-mono mb-2'>Temperature <span className='text-black font-normal'><i className="ri-temp-hot-line"></i></span> </h4>
        <h1 className='2xl:text-5xl xl:text-4xl text-3xl mb-4'>{temperature}&deg;<span className='text-3xl'>c</span></h1>
        

            <div className='flex flex-col '>
              <h3 className='text-gray-800 text-sm 2xl:text-lg'>Min - <span className='font-semibold'>{minTemp}&deg;c</span></h3>
              <h3 className='text-gray-800 text-sm 2xl:text-lg'>Max - <span className='font-semibold'>{maxTemp}&deg;c</span></h3>
            </div>
            <img className='w-[30%] absolute bottom-3 right-2 ' src="/assets/weatherIcons/temp.png" alt="" />

    </div>
    </div>
  )
}

export default TempCard