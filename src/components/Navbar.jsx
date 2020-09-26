import React from 'react'
import Logo from '../assets/images/logo.svg'
import '../assets/styles/components/Navbar.scss'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar__brand">
                <img className="Navbar__brand-logo" src={Logo} alt="Logo de la conferencia"></img>
                <span className="font-weight-light">Platzi</span>
                <span className="font-weight-bold">Conf</span>
            </div> 
        </div>
    )
}

export default Navbar