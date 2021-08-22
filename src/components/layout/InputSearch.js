import styled from "styled-components"

import { Button } from "../../assets/style/style";
import { MediaLarge, MediaMedium } from "../../assets/style/variables";

export const CustomInput = styled.input`
    margin-left: 10px;
    width: 100px;
    height: 20px;
    font-size: 0.8rem;
    border-radius: 5px;
    border: none;
    padding: 5px;
    outline: 0;
    box-sizing: border-box;
    display: ${props => props.visible === 'favorite'? 'none':'block'};
    &:focus{
        border: solid 2px #00000090;
    }
    @media(min-width: ${MediaMedium}) {
        width: 250px;
        height: 35px;
        font-size: 1.3rem;
        padding: 10px;
    }
    @media(min-width: ${MediaLarge}) {
        width: 500px; 
        height: 40px;
        font-size: 1.6rem;
    }
`

export const ButtonSearch = styled(Button)`
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0 10px 0 10px;
    display: ${props => props.visible === 'favorite'? 'none':'block'};
    margin-left: 5px;
    &:hover{
        background-color: #28464B99;
    }  
    @media(min-width: ${MediaMedium}) {
        font-size: 1.1rem;
        padding: 0 15px 0 15px;
        margin-left: 20px;
    }
    @media(min-width: ${MediaLarge}) {
        font-size: 1.3rem;
        padding: 0 20px 0 20px;
    }
`

export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
`