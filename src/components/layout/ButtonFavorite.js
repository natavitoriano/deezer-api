import styled from 'styled-components'

import { ButtonMusicList } from "../../assets/style/style";
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'

import { MediaMedium } from '../../assets/style/variables';

export let IconFavorite = styled(MdFavorite)`
    display: ${props => props.dp === 'home' ? "none": "block" };
`

export const IconFavoriteBorder = styled(MdFavoriteBorder)`
    display: ${props => props.dp === 'home' ? "block": "none" };
`

export const StyleButtonFavorite = styled(ButtonMusicList)`
    margin-right: 10px;
    &:hover{
        color: #28464B
    }
    &:hover ${IconFavorite}{
        display: ${props => props.dp === 'home' ? "block": "none" };
    }
    &:hover ${IconFavoriteBorder}{
        display: ${props => props.dp === 'home' ? "none": "block" };
    }
    @media(min-width: ${MediaMedium}){
        margin-right: 25px;
    }
`