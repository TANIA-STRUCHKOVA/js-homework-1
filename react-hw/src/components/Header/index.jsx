import React from 'react';
import {logo} from './config';
import { Link } from 'react-router-dom';
import { Logo } from './style';


function Header() {
  return (
    <Link to="/"><Logo src={logo} alt="Logo" />
    </Link>
  )
}

export default Header