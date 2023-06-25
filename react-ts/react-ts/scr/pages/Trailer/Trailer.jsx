import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actionInfo } from '../../store/action/actionInfo'
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 0,
    },
};


function Trailer() {
    const dispatch = useDispatch()
    const trailer = useSelector(state => state.info.trailer)
    const params = useParams()
    const id = params.id.slice(1)

    useEffect(() => {
        dispatch(actionInfo.getInfo(id))
    }, [])



    return (
        <div>
            <YouTube videoId={trailer.key} opts={opts} />
        </div>
    )
}
export default Trailer