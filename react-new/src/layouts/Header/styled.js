import styled from "styled-components";

export const ContHeader = styled.div`
width: 100%;
height: 10vh;
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
`
export const ButtonHeader = styled.button`
width: 90px;
height: 40px;
padding: ${props => props.padding}px;
`