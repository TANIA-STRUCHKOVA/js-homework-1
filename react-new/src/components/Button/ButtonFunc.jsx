import React, { useState } from "react";


function ButtonFunc() {
    const [count, setCount] = useState(0)

    const handleInc = () => {
        setCount(count + 1)

    }
    return (
        <>
            <button onClick={handleInc}>Click me - {count} </button>
        </>
    )
}

export default ButtonFunc