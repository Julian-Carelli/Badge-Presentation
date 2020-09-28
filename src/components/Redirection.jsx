//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Assets

import '../assets/styles/components/Redirection.scss'

const Redirection = () => (
    <div className="container Redirection">
        <div className="row Redirection-row">
            <div className="col-12 Redirection__text">
                <h2>Lista de Badges</h2>
                <Link to="/badges/new">
                    <button className="btn btn-primary">Crear Badge</button>
                </Link>
            </div>
        </div>
    </div>
)

export default Redirection