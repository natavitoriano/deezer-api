import styled from "styled-components";

import { MediaLarge, MediaMedium } from "../../assets/style/variables";

export const CustomHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #333;
    color: #fff;
    border-bottom: solid 5px gray;
    min-height: 55px;
    @media(min-width: ${MediaMedium}){
        min-height: 73px;
    }
    @media(min-width: ${MediaLarge}){
        min-height: 100px;
    }
`





