//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import Error from '../assets/images/error404.png'

//Assets

import '../assets/styles/components/Error404.scss'

const Error404 = () => (
    <div className="container-fluid Error404">
        <div className="row Error404-row">
            <div className="col-12 Error404__col">
                <div className="Error404__col--img">
                    <img src={Error} alt="Imagen Error 404"></img>
                </div>
                <h1>Pagina no encontrada</h1>
                <div className="Error404__col--info">
                    <p>La pagina que estas buscando no es valida</p>
                    <Link to="/">
                        <button className="btn btn-primary">Volver al Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Error404