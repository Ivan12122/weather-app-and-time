import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = (props) => {
  return (<>
        <header className="header">
            
            <Link to='/Weather' className="header__name">Weather</Link>
            <Link to='/Watch' className="header__name">Watch</Link>
            
        </header>
        <hr className="header__line"></hr>
        </>
  )

}

export {Header};