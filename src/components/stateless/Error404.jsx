//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import Error from '../../assets/images/error404.png'

//Assets

import '../../assets/styles/components/Error404.scss'

const Error404 = () => (
    <div className="Error404 container-fluid">
        <div className="Error404__row row ">
            <div className="Error404-content col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="Error404-content__background">
                    <img className="Error404-content__img" src={Error} alt="Imagen Error 404"></img>
                </div>
                <h1 className="Error404-content__title">Pagina no encontrada</h1>
                <div className="Error404-content__info">
                    <p className="Error404-content__text">La pagina que estas buscando no es valida</p>
                    <Link to="/">
                        <button className="Error404-content__button btn btn-primary">Volver al Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Error404