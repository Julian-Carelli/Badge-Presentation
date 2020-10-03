//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Assets

import '../assets/styles/components/Navbar.scss'

const Navbar = () => (
    <div className="Navbar">
        <div className="Navbar__brand">
            <Link to="/">
                <i className="Navbar__brand--logo fas fa-home"></i>
            </Link>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
        </div> 
    </div>
)


export default Navbar