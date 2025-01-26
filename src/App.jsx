import React, { useState } from 'react'
import WeatherApp from './WeatherApp';

const App = () => {
  document.oncontextmenu = () => {
    return false;
  }

  document.onkeydown = (e) => {
    if(e.key === 'F12'){
      return false;
    }
    if(e.ctrlKey && e.key == 'u'){
      return false;
    }
  }
  
  return (
    <WeatherApp />
  )
}

export default App