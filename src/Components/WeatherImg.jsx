import React from 'react'

const WeatherImg = ({temp}) => {
    let imgUrl = "/src/assets/weatherImg/rain.avif";
    if(temp <= 20){imgUrl = "/src/assets/weatherImg/cold.avif";}
    else if(temp > 20){imgUrl = "/src/assets/weatherImg/sunny.avif";}

  return (
    <div className='w-full flex justify-center'>
        <div className='bg-white rounded-2xl w-[80%] aspect-square shadow-lg'>
            <img className='object-cover h-full w-full rounded-2xl' src={imgUrl} alt="" />
        </div>
    </div>
  )
}

export default WeatherImg