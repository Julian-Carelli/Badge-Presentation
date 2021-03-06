//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import error from '../../assets/images/error500.png'

//Assets

import '../../assets/styles/components/_Error500.scss'

const Error500 = () => (
    <div className="Error500 container-fluid">
        <div className="Error500__row bg-white row">
            <div className="Error500-content col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="Error500-content__background">
                    <img className="Error500-content__img" src={error} alt="Imagen Error 500"></img>
                </div>
                <h1 className="Error500-content__title">Pagina no encontrada</h1>
                <div className="Error500-content__info">
                    <p className="Error500-content__text">La pagina que estas buscando no es valida</p>
                    <Link to="/">
                        <button className="Error500-content__button btn btn-primary">Volver al Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Error500