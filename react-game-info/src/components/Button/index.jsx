import React from 'react'
import { WrapperButton, ButtonView } from './styled'


function Button({ text, className, handleClick }) {
    return (
        <WrapperButton>
            <ButtonView className={className} onClick={handleClick}>{text}</ButtonView>
        </WrapperButton>
    )
}

export default Button

