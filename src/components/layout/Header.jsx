import './Header.js'
import React from 'react'

import Menu from './Menu.jsx'
import InputSearch from './InputSearch.jsx'

import { CustomHeader } from './Header.js'


const Header = props => (
    <CustomHeader>
        <InputSearch /> 
        <Menu />
    </CustomHeader>
)

export default Header