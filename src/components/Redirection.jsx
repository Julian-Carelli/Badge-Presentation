//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Assets

import '../assets/styles/components/Redirection.scss'

const Redirection = () => (
    <div className="Redirection container ">
        <div className="Redirection-row row">
            <div className="Redirection-row__text col col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <h2 className="Redirection-row__title">Lista de Badges</h2>
                <Link to="/badges/new">
                    <button className="Redirection-row__button btn btn-primary">Crear Badge</button>
                </Link>
            </div>
        </div>
    </div>
)

export default Redirection