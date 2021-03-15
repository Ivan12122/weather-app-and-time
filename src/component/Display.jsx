import React from 'react';
import '../styles/App.css';
import sunny from '../images/sunny.png'
import rain_clouds from '../images/rain_clouds_rain_cloudyweather_lluvi.png'
import snow_cloud from '../images/snow_cloud_weather.png'
import timeintervalsunny from '../images/timeintervalsunny_sunny_sunshine_cloud_tiempo.png'
import weather_showers from '../images/weather_showers_rain_cloud.png'

const Display = (props) =>{
    const weatherData = props.weather
    let img = ''

    switch (weatherData.weather[0].description) {
        case 'ясно':
            img = sunny
            break;
        case 'облачно с прояснениями':
            img = rain_clouds
            break;
        case 'небольшой дождь':
            img = rain_clouds
            break;
        case 'пасмурно':
            img = timeintervalsunny
            break;
        case 'снег':
            img = snow_cloud
            break;
        case 'небольшой снег':
            img = snow_cloud
            break;
        case 'дождь':
            img = weather_showers
            break;
        default:
            img = timeintervalsunny
            break;
    }

    return (
      <div className="weather-display">
        <div>
        <h2 className="city-status">
          {`${weatherData.name}, погода`}
          <img src = {img} className = 'img-Weather'></img>
        </h2>
        <div className="weather-info">
          <p className="weather-info__item">{weatherData.main.temp}°</p>
          <p className="weather-info__item">По ощущению: {weatherData.main.feels_like}°</p>
          <p className="weather-info__item">Ветер: {weatherData.wind.speed} м/с</p>
          <p className="weather-info__item">Статус: {weatherData.weather[0].description}</p>
          <p className="weather-info__item">Давление: {(weatherData.main.pressure *  0.75006375541921).toFixed(2)} мм рт. ст.</p>
          <p className="weather-info__item">Влажность: {weatherData.main.humidity}%</p>
          <p className="weather-info__item">Координаты: {`[${weatherData.coord.lat}, ${weatherData.coord.lon}]; ${weatherData.sys.country}`}</p>
        </div>
        </div>
      </div>
    )
}

export {Display}