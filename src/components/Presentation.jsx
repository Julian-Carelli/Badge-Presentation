import React from 'react'
import {Link} from 'react-router-dom'
import Astronauts from '../assets/images/astronauts.svg'
import '../assets/styles/components/Presentation.scss'

const Presentation = () => (
    <div className="container-fluid Presentation">
        <div className="row Presentation-row">
            <div className="col-6 Presentation__img">
                <img src={Astronauts} alt="Imagen de conferencia"></img>
            </div>
            <div className="col-6 Presentation__text">
                <h1>Platzi Conf</h1>
                <div className="Presentation__text--info">
                    <p>Crea tu Badge personalizado</p>
                    <Link to="/badges/new">
                        <button className="btn btn-primary">Nuevo Badge</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Presentation