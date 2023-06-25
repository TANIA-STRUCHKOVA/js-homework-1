
import React, {useEffect} from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { actionMovies } from '../../store/action/actionMovies';

function Slider() {
    const dispatch = useDispatch()

    const movies = useSelector(state => state.movies.movies)

    useEffect(() =>  {
        dispatch(actionMovies.getMovies())
    }, [])

  return (
    <div className="slide-container">
    <Fade>
      {movies.map((fadeImage) => (
        <div key={fadeImage.id}>
          <img style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w500${fadeImage.backdrop_path}`} />
        </div>
      ))}
    </Fade>
  </div>
  )
}

export default Slider
