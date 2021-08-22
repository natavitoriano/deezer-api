import styled from "styled-components";

import { ColorPrimary, MediaLarge, MediaMedium } from '../../assets/style/variables';

export const Button = styled.button`
    color: #eee;
    background-color: ${ColorPrimary};
    font-family: 'Oswald';
`

export const ButtonMusicList = styled(Button)`
    display: flex;
    font-size: 20px;
    color: ${ColorPrimary};
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    &:hover{
        color: ${ColorPrimary+'99'};
    }
    @media(min-width: ${MediaMedium}){
        font-size: 40px;
    }
    @media(min-width: ${MediaLarge}){
        font-size: 50px;
    }
`

export const TitlePages = styled.h1`
        font-size: 1.3rem;
    @media(min-width: ${MediaMedium}) {
        font-size: 2rem;
    }
    @media(min-width: ${MediaLarge}) {
        font-size: 2.3rem;
    }
`