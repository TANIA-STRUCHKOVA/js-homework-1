import React, { Fragment, useEffect, useState } from 'react'
import Card from "../../components/Card/Card"
import { btnPagination } from "../../constants/btnPagination"
import './Project1.css'
import Button from "../../components/Button/Button"
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'


function Project1() {
    const [character, setCharacter] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((response) => response.json())
            .then(data => {
                setCharacter(data.results)
                setLoading(false)
            })
    }, [page])


    //componentDidMoumt()     componentDidUpdate ()    componentWillUnmount()   --- методы, которые включает useEffect 

    const handlePagination = (e) => {
        setPage(e.target.textContent)
    }

    if (loading) {
        return <><Loader/></>
    }

    return (
        <div>
            <Link to="/project1func">
                <Button text="func rick and morty" />
            </Link>
            <div>{btnPagination.map((_, idx) => {
                return <button onClick={handlePagination}>{idx += 1}</button>
            })}</div>


            <div>
                <div className='card-wrapper'>
                    {character.map(card => {
                        return <Fragment key={card.id}><Card title={card.name} genre={card.status} desc={card.gender} poster={card.image} /></Fragment>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project1

//   npm run build   --- в новом терминале ввести 
