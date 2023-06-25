import React, { useEffect, useState } from "react"
import Cards from '../../components/Cards'
import { Wrapper, MainCont, InputWrapper, InputSearcher } from "./styled"
import Button from "../../components/Button"
import { btnMoreGames } from "./config"


function ContGameCard() {
    const [games, setGames] = useState([])
    const [size, setSize] = useState(13)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=6f36b5f19c844736ae14b4c0a065cafc&page_size=${size}&{search}${search}`)
            .then(res => res.json())
            .then(data => setGames(data.results))
    }, [size, search])


    const handlePagination = () => {
        setSize(size + 13)

    }

    const handleSearch = (e) => {
        setSearch(e.target.value)

    }

    return (
        <MainCont>
            <InputWrapper>
                <InputSearcher onChange={handleSearch} />
            </InputWrapper>
            <Wrapper>
                {games.map(({ name, reLeased, background_image, rating, id }) => {
                    return <Cards name={name} date={reLeased} img={background_image} rating={rating} id={id} />
                })}
            </Wrapper>
            <Button text={btnMoreGames} className="btn" handleClick={handlePagination} />
        </MainCont>
    )
}

export default ContGameCard;