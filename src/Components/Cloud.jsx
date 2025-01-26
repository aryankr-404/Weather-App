import React from 'react'

const Cloud = ({cloud}) => {
  let imageSrc = "/assets/weatherIcons/partialCloudy.jfif";
  let keyword = '---';
 
  if (cloud <= 10) {
    keyword = "Clear";
    imageSrc = "/assets/weatherIcons/sun.png";
  } else if (cloud > 10 && cloud < 50) {
    keyword ='Partly cloudy';
    imageSrc = "/assets/weatherIcons/partialCloudy.jfif";
  } else if (cloud >= 50) {
    keyword = 'Cloudy';
    imageSrc = "/assets/weatherIcons/cloud.png";
  }

  return (
    <div className='relative w-full h-full flex flex-col justify-center items-center'>
    <div className='relative bg-white rounded-2xl w-[80%] aspect-square p-5 shadow-lg'>
        <h4 className=' text-gray-400 font-semibold font-mono mb-2 '>Cloud status <span className='text-black font-normal'><i className="ri-rainy-line"></i></span> </h4>
        
        {cloud === '---' ? (
          <h1 className='2xl:text-5xl text-4xl mb-4'>---</h1>
        ) : (<h1 className='2xl:text-5xl text-3xl mb-4'>{keyword}</h1>)}

        {imageSrc && <img className="w-[25%] absolute bottom-3 rounded-xl" src={imageSrc} alt="Weather icon" />}

    </div>
    </div>
  )
}

export default Cloud