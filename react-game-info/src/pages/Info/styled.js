import styled from "styled-components";

const positionFlex = `
width: 100%;
display: flex;
`


export const Wrapper = styled.h1`
${positionFlex};
flex-direction: column;
align-items: center;
`

export const Title = styled.h1`
`

export const ImgCont = styled.div`
${positionFlex};
justify-content: center;
`

export const Img = styled.img`
width: 80%;
`


export const Description = styled.p`
margin: 50px;
text-align: center;
`


// импортируем потом всё в индекс jsx