import styled from 'styled-components'

import { ButtonMusicList } from "../../assets/style/style";
import { ImSad2 } from 'react-icons/im'

import { ColorPrimary, MediaLarge, MediaMedium } from '../../assets/style/variables';

export const List = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    overflow-y: auto;
    height: 80vh;
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin: 5px;
    background-color: #00000020;
`

export const ContainerListItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    justify-content: space-between;
    width: 40vw;
    background-color: #00000040;
    @media(min-width: ${MediaMedium}){
        margin: 15px;
        padding: 15px;
    }
    @media(min-width: ${MediaLarge}){
        margin: 20px;
        padding: 20px;
    }
`

export const ImgAlbum = styled.img`
    background-repeat: no-repeat;
    margin: 5px;
    height: 125px;
    width: 125px;
    @media(min-width: ${MediaMedium}){
        height: 200px;
        width: 200px;
        margin-left: 20px;
    }
    @media(min-width: ${MediaLarge}){
        height: 250px;
        width: 250px;
    }
`

export const ButtonCompletMusic = styled(ButtonMusicList)`

`

export const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${props=>props.margin ? '10px' : '0px'};
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 1rem;
    @media(min-width: ${MediaMedium}){
        font-size: 2rem;
    }
    @media(min-width: ${MediaLarge}){
        font-size: 2.4rem;
    }
`
export const Artist = styled.h1`
    font-size: 1rem;
    font-weight: normal;
    @media(min-width: ${MediaMedium}){
        font-size: 1.7rem;
    }
    @media(min-width: ${MediaLarge}){
        font-size: 2rem;
    }
`

export const StrListSmall = styled.h1`
    font-size: 0.7rem;
    font-weight: normal;
    @media(min-width: ${MediaMedium}){
        font-size: 1rem;
    }
    @media(min-width: ${MediaLarge}){
        font-size: 1.2rem;
    }
`
export const IconSad = styled(ImSad2)`
    display: flex;
    font-size: 30px;
    color: ${ColorPrimary};
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    margin-top: 20px;
    @media(min-width: ${MediaMedium}){
        font-size: 40px;
    }
    @media(min-width: ${MediaLarge}){
        font-size: 50px;
    }
`

export const ContainerMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    display: ${props => props.visible === 0 && props.view === 'favorite' ? 'flex':'none'};
`
