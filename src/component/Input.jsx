import React, { useState } from 'react';
import '../styles/App.css';

//Компонент рендерит поисковую строку и сообщения о невалидных данных
const AddCity = (props) => {

    const [activeCity, setActiveCity] = useState("");
    
    const onChangeHandler = event => {
        setActiveCity(event.target.value);
      };

  return (
    <div className="search-wrapper">
      <div className="search">
        <input
            onChange = {onChangeHandler}
            type="text" 
            className="search_input"
            value={activeCity}
            placeholder="Погода в вашем городе..."
        />
        <button id="searchBtn" className="search_btn" onClick={()=>{props.ShowWeather(activeCity)}}></button>
		  </div>
    {props.searchErr === 'no value' && <div className="search-err-message"><span>Необходимо ввестиназвание города</span></div>}
    {props.searchErr === 'duplicate' && <div className="search-err-message"><span>Данный город уже был добавлен ранее</span></div>}
    </div>
  );
}

export {AddCity};