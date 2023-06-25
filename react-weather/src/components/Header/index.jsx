import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from './config';
import {Logo} from './style';



class Header extends React.Component {
  render() {
    return (
      <>
    
      <Link to="/"><Logo src={logo} alt="Logo" />
      </Link>
        <h2>REACT WEATHER</h2>
        <p>Узнай погоду в своём городе!</p>
      
      </>
    )
  }
}

export default Header;
