import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../components/Cards/Cards'
import { actionMovies } from '../../store/action/actionMovies'
import './Home.scss'
import { genres } from '../../constants/genres'
import Slider from '../../components/Slider/Slider'
import Pagination from '../../components/Pagination/Pagination'

function Home() {
    const [isVisible, setIsVisible] = useState(false)
    const [page, setPage] = useState(1)
    const [genre, setGenre] = useState('')

    const dispatch = useDispatch()

    const movies = useSelector(state => state.movies.movies)

    useEffect(() => {
        dispatch(actionMovies.getMovies(genre, page))
    }, [genre, page])

    const handleGenres = (id) => () => {
        setGenre(id)
        /*  dispatch(actionMovies.getMovies(id)) */
    }

    const handleToggleViewGenres = () => {
        setIsVisible(!isVisible)
    }

    const handlePage = (e) => {
        setPage(e.target.textContent)
    }

    const handleAdd = (id) => () => {
        dispatch(actionMovies.addMovies(movies.find(i => i.id === id)))
    }

    return (
        <>
            <Link to="/favorite">
                <button>Favorite</button>
            </Link>
            <Slider fadeImage={movies} />
            <div><button onClick={handleToggleViewGenres}>{isVisible ? 'Hide genres' : 'Show genres'}</button> {isVisible && genres.map(({ id, name }) => {
                return <button key={id} onClick={handleGenres(id)}>{name}</button>
            })}</div>
            <div className='movies-cont'>{movies.map(({ backdrop_path, title, vote_average, id }) => {
                return <div><Cards title={title} img={backdrop_path} rating={vote_average} id={id} handleClick={handleAdd(id)} />
                </div >
            })}</div>
            <Pagination handleClick={handlePage} />
        </>
    )
}

export default Home