//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Assets

import '../assets/styles/components/Navbar.scss'

const Navbar = () => (
    <div className="Navbar">
        <div className="Navbar-brand">
            <Link to="/">
                <i className="Navbar-brand__icon fas fa-home"></i>
            </Link>
            <span className="Navbar-brand__name font-weight-light">Platzi</span>
            <span className="Navbar-brand__name font-weight-bold">Conf</span>
        </div> 
    </div>
)


export default Navbar