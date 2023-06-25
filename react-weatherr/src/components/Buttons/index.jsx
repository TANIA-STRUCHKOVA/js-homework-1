import React from 'react';
import { ButtonsContainer, ButtonsBlock, Button1, Button2, Button3, Button4, ButtonsOut } from './style';


function Buttons() {

    return (
        <ButtonsContainer>

            <ButtonsBlock>
                <Button1>На неделю </Button1>
                <Button2>На месяц </Button2>
                <Button3>На 10 дней </Button3>
            </ButtonsBlock>

            <ButtonsOut>
                <Button4>Отменить </Button4>
            </ButtonsOut>


        </ButtonsContainer>
    )
}

export default Buttons