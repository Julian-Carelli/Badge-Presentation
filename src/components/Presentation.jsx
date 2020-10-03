//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import Gravatar from '../components/Gravatar'

//Assets

import Astronauts from '../assets/images/astronauts.svg'
import '../assets/styles/components/Presentation.scss'

const Presentation = ({state}) => (
    <div className="container-fluid Presentation">
        <div className="row Presentation-row">
            <div className="col-4 Presentation__img">
                <img src={Astronauts} alt="Imagen de conferencia"></img>
            </div>
            <div className="col-4 Presentation__text">
                <h1>Platzi Conf</h1>
                <div className="Presentation__text--info">
                    <p>Crea tu Badge personalizado</p>
                    <Link to="/badges/new">
                        <button className="btn btn-primary">Nuevo Badge</button>
                    </Link>
                </div>
            </div>
            <div className="col-4 Presentation__recents">
                <h2 className="text-white">Badges Recientes</h2>
                {state.map(badge => 
                    <Link className="text-reset text-decoration-none" key={badge.id} to={`/badges/${badge.id}`}>
                        <div className="Card bg-white mb-2">
                            <div className="Card__img">
                                <Gravatar email={badge.email} alt="Avatar"></Gravatar>
                            </div>
                            <div className="Card__text">
                                <h4>{badge.firstName} {badge.lastName}</h4>
                                <h5>{badge.jobTitle}</h5>
                                <p>{badge.email}</p>
                                <span>{badge.twitter}</span>
                            </div>
                        </div>
                    </Link>
                )}
                
            </div>
        </div>
    </div>
)

export default Presentation