//Dependencies

import React from 'react'

//Assets

import '../assets/styles/components/Footer.scss'

const Footer = () => (

    <div className="Footer container-fluid">
        <div className="Footer__row row">
            <div className="Footer-content col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <a className="Footer-content__link" target="blank" href="https://www.instagram.com/juli.carelli_/"><i className="Footer-content__icon icon fab fa-instagram"></i></a>
                <a className="Footer-content__link" target="blank" href="https://github.com/Julian-Carelli"><i className="Footer-content__icon icon fab fa-github"></i></a>
                <a className="Footer-content__link" target="blank" href="https://www.linkedin.com/in/julian-carelli/"><i className="Footer-content__icon icon fab fa-linkedin"></i></a>
            </div>
        </div>
    </div> 

)

export default Footer