import React from 'react'
import './Cards.scss';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

function Cards({ img, title, rating, id, handleClick }) {
  return (
    <div className='card'>
      <p className='title'>{title}</p>

      <Rating name="disabled" value={rating} readOnly max={10} />
      <Link to={`/trailer/:${id}`}>
        <div><img width='300px' src={`https://image.tmdb.org/t/p/w500${img}`} /></div>
      </Link>
      <button onClick={handleClick}>add</button>
    </div>
  )
}

export default Cards