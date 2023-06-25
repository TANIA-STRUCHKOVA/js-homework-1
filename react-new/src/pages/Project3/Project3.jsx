import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Project3() {
    const [isValue, setIsValue] = useState('')
    const [ok, setOk] = useState('false')

    const handleValue = (e) => {
        setIsValue(e.target.value)
    }
    const handleOk = () => {
        if (isValue.length === 3) {
            setOk(isValue)

        }
    }

    return (
        <div>
            <Link to="/project3class">
            <button>class status code</button>
            </Link>
            <div>
                <input onChange={handleValue} />
                <button onClick={handleOk}>OK</button>

            </div>
            <div>
                {ok ? <img src={`https://http.cat/${ok}`} /> : <h2>Enter your status code</h2>}
            </div>

        </div>
    )
}

export default Project3