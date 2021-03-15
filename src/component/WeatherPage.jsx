import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { AddCity } from './Input';
import { Display } from './Display';

const WeatherPage = (props) => {
    const [weather, setWeather] = useState([])

    const ShowWeather = (activeCity) =>{
      const APPID = 'ef598dd48091a3a2eb6a63ef6c4d75b2'
      const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + 
                  activeCity + `&units=metric&lang=ru&APPID=${APPID}`;
      fetch(URL).then(response => {
        if (response.ok) {
          return response.json(); 
        } else {
          throw response.status
        }
      })
      .then(data => {
        setWeather(data)
      })
      .catch(err => {
        console.warn('Данные не были получены, ошибка: ' + err);
  
      }) 
    }
  
    useEffect(() => { 
      ShowWeather('Samara')
    },[]);
  return (
    <React.Fragment>
        <main className="main-wrapper">
          <AddCity ShowWeather = {ShowWeather}/>
        </main>
        <div className='main-info'>
          {weather.main ? <Display weather = {weather}/> : <></>}
        </div>
  </React.Fragment>
  )

}

export {WeatherPage};