//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Assets

import '../../assets/styles/components/Navbar.scss'

const Navbar = () => (
    <div className="Navbar">    
        <div className="Navbar-brand">
            <div className="Navbar-brand__logo">
                <Link to="/">
                    <i className="Navbar-brand__icon fas fa-home"></i>
                </Link>
                <span className="Navbar-brand__name font-weight-light">Platzi</span>
                <span className="Navbar-brand__name font-weight-bold">Conf</span>
            </div>
            <div className="Navbar-brand__profile">
                <a className="Navbar-brand__link" target="blank" href="https://www.instagram.com/juli.carelli_/"><i className="Navbar-brand__fab icon fab fa-instagram"></i></a>
                <a className="Navbar-brand__link" target="blank" href="https://github.com/Julian-Carelli"><i className="Navbar-brand__fab icon fab fa-github"></i></a>
                <a className="Navbar-brand__link" target="blank" href="https://www.linkedin.com/in/julian-carelli/"><i className="Navbar-brand__fab icon fab fa-linkedin"></i></a>
            </div>
        </div> 
    </div>
)


export default Navbar