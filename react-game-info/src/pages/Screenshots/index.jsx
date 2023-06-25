import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Wrapper, Img, ImgCont } from "./styled"


function Screenshots() {
    const [gameScreen, setGameScreen] = useState([])
    const params = useParams()
    const id = params.id.slice(1)


    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=6f36b5f19c844736ae14b4c0a065cafc`)
            .then(res => res.json())
            .then(data => setGameScreen(data.results))
    }, [])

    return (
        <Wrapper>{gameScreen.map(({ id, image }) => {
            return <ImgCont key={id}><Img src={image} /> </ImgCont>
        })}
        </Wrapper>
    )
}

export default Screenshots