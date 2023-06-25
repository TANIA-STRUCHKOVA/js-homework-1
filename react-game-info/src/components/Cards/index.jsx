import React from 'react'
import { Wrapper, WrapperText, WrapperImg, ImgView } from './style'
import Button from '../Button'
import { config } from './config'
import { Link } from 'react-router-dom'

function Cards({ name, date, img, rating, id }) {
    return (
            <Wrapper>
                <WrapperText>name: <br />{name}</WrapperText>
                <WrapperText>date:{date}</WrapperText>
                <WrapperImg><ImgView width="250" src={img} alt={name} /></WrapperImg>
                <WrapperText>rating:{rating}</WrapperText>
                <Link to={`/info/:${id}`}>
                    <Button text={config.text} />                    
                </Link>
                <Link to={`/screenshots/:${id}`}>
                    <Button text={config.titleScreen} />        
                </Link>
                <Link to={`/movies/:${id}`}>
                    <Button text={config.moviesTitle} />   
                </Link>
            </Wrapper>
        
    )
}

export default Cards

//Wrapper,WrapperText,WrapperImg,ImgView  вставить соотвественно внутрь <Wrapper> </Wrapper> : в <> </> WrapperText,WrapperImg 