//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import error from '../assets/images/error500.png'

//Assets

import '../assets/styles/components/Error500.scss'

const Error500 = () => (
    <div className="container-fluid pl-0 pr-0 Error500">
        <div className="row Error500-row bg-white">
        <div className="col-12 Error500__col">
                <div className="Error500__col--img">
                    <img src={error} alt="Imagen Error 500"></img>
                </div>
                <h1>Pagina no encontrada</h1>
                <div className="Error500__col--info">
                    <p>La pagina que estas buscando no es valida</p>
                    <Link to="/">
                        <button className="btn btn-primary">Volver al Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Error500