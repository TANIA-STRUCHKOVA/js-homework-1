import React, { useEffect, useRef, useState } from 'react'


function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
const refTime = useRef()

    useEffect(() => {
        refTime.current = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => {
            clearInterval(refTime.current)                   // useRef-это ссылка на ДОМ-элемент
        }
    }, [time])

    return (
        <div>{time}</div>
    )
}

export default Time