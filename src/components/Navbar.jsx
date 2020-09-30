//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Assets

import Logo from '../assets/images/logo.svg'
import '../assets/styles/components/Navbar.scss'

const Navbar = () => (
    <div className="Navbar">
        <div className="Navbar__brand">
            <Link to="/">
                <img className="Navbar__brand-logo" src={Logo} alt="Logo de la conferencia"></img>
            </Link>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
        </div> 
    </div>
)


export default Navbar