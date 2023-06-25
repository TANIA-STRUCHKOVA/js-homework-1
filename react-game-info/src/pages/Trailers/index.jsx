import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"



function Trailers () {
    const [gameTrailers, setGameTrailers] = useState([])
    const params = useParams()
    const id = params.id.slice(1)


    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}/movies?key=6f36b5f19c844736ae14b4c0a065cafc`)
            .then(res => res.json())
            .then(data => setGameTrailers(data.results))
    }, [])

    return (
        <div>{gameTrailers.map(i=>{
            return <video type='video/mp4' controls='controls'> <sourse src={i.data.max} />
            </video>
        })}</div>
    )
}

export default Trailers