import React from 'react';
import { HeaderContainer, Logo, Drop, HeaderSearch, HeaderLogo, Name,  InputSearcher } from './style';




function Header() {

    return (
        <HeaderContainer>

            <HeaderLogo>
                <Logo alt="Logo weather" />
                <Name> REACT WEATHER</ Name>
            </HeaderLogo>

            <HeaderSearch>
                <Drop />
               
                <InputSearcher alt="Logo" />
            </HeaderSearch>


        </HeaderContainer>
    )
}

export default Header