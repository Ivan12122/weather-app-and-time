import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { Header } from './Header';

const Clock = () =>{
    
    const [time, setTime] = useState(new Date(Date.now()).toLocaleTimeString());
    const [date, setDate] = useState(new Date(Date.now()).toLocaleDateString());

    const getDateTimeString = () => {
        setTime(new Date(Date.now()).toLocaleTimeString());
        setDate(new Date(Date.now()).toLocaleDateString());
      return date;
    }
    useEffect(() => {
        setTimeout(() => {
            getDateTimeString()
        }, 1000);
    })

      return(<>
              <div id="clock">
                <div className="date">{date}</div>
                <div className="time">{time}</div>
              </div>
              </>
      );
  }
  
export {Clock}