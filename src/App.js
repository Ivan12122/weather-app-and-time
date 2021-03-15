import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Clock } from './component/Clock';
import { Header } from './component/Header';
import { WeatherPage } from './component/WeatherPage';
import './styles/App.css';

const  App = () => {

  return (<>
    <Route path='/' component={Header}/>
    <Route path='/watch' component={Clock}/>
    <Route path='/weather' component={WeatherPage}/>
    </>
  );
}

export default App;
