import styled from "styled-components";
import { Link } from 'react-router-dom'

import { ColorPrimary } from '../../assets/style/variables';
import { MediaLarge, MediaMedium } from "../../assets/style/variables";

export const NavMenu = styled.nav`
    margin-right: 20px;
`

export const ListMenu = styled.ul`
    display: flex;
    list-style: none;
`

export const MenuItem = styled.li`
`

export const CustomLink = styled(Link)`
    text-decoration: none;
    color: #eeeeee60;    
    font-size: 1rem;
    padding: 5px 15px;     
    box-sizing: border-box;
    overflow: hidden;
    &:hover{
        color: #eee; 
        border-bottom: solid 5px ${ColorPrimary};
    }
    @media(min-width: ${MediaMedium}) {
        font-size: 1.6rem;
        padding: 10px 20px;
    }
    @media(min-width: ${MediaLarge}) {
        font-size: 1.8rem;
        padding: 20px 30px;
    }
`

export const HomeLink = styled(CustomLink)`
    color: ${props => props.selected === 'home'? '#eee':'#eeeeee60'};
    border-bottom: ${props => props.selected === 'home'? 'solid 5px #000000':'none'};      
`

export const FavoriteLink = styled(CustomLink)`
    color: ${props => props.selected === 'favorite'? '#eee':'#eeeeee60'};
    border-bottom: ${props => props.selected === 'favorite'? 'solid 5px #000000':'none'};
`