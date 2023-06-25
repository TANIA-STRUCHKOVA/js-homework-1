import QRCode from "react-qr-code"
import React, { useState, useEffect } from 'react'


function QrReact() {
    const [qr, setQr] = useState('')

    useEffect(() => {
        setQr(localStorage.getItem('qr-key'))
    }, [qr])

    const handleQr = (e) => {
        setQr(localStorage.setItem('qr-key', e.target.value))
    };

    return (
        <div>
            <div><input onChange={handleQr} /></div>
            <div><QRCode value={localStorage.length > 0 ? localStorage.getItem('qr-key') : ''} /></div>
        </div>
    )
}

export default QrReact