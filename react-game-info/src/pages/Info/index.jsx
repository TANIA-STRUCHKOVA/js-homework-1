import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Wrapper, Title, Description, Img, ImgCont} from './styled'

function Info() {
    const [gameInfo, setGameInfo] = useState ({})
    const params = useParams()
    const id = params.id.slice(1)


    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}?key=6f36b5f19c844736ae14b4c0a065cafc`)
            .then(res => res.json())
            .then(data => setGameInfo(data))
    }, [])


    return (
        <Wrapper>
        <Title>{gameInfo.name}</Title>
        <ImgCont>< Img src={gameInfo.background_image} alt={gameInfo.name}></Img></ImgCont>
        <Description>{gameInfo.description_raw}</Description>
        </Wrapper>
    )
}
//https://api.rawg.io/api/games/{id}

export default Info