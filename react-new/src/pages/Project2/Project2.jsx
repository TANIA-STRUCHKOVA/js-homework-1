import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Project2() {
    const [yesNo, setYesNo] = useState({})
    const [isReload, setIsReload] = useState(false)


    useEffect(() => {
        fetch('https://yesno.wtf/api')
            .then(res => res.json())
            .then(data => setYesNo(data))

    }, [isReload])


    const handleReload = () => {
        setIsReload(!isReload)
    }

    return (
        <div>
            <Link to="/project2"><button>class yesno</button></Link>
            <div><img src={yesNo.image} /></div>
            <p>{yesNo.answer}</p>
            <button onClick={handleReload}>Reload</button>
        </div>
    )
}

export default Project2