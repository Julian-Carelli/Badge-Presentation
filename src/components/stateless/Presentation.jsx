//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import Gravatar from './Gravatar'

//Assets

import Astronauts from '../../assets/images/astronauts.svg'

const Presentation = ({data}) => (
    <div className="Presentation container-fluid">
        <div className="Presentation__row row">
            <div className="Presentation-background col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                <img className="Presentation-background__img" src={Astronauts} alt="Imagen de conferencia"></img>
            </div>
            <div className="Presentation-content col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                <h1 className="Presentation-content__title">Platzi Conf</h1>
                <div className="Presentation-content__info">
                    <p className="Presentation-content__text">Crea tu Badge personalizado</p>
                    <Link to="/badges/new">
                        <button className="Presentation-content__btn btn btn-primary">Nuevo Badge</button>
                    </Link>
                </div>
            </div>
            <div className="Presentation-recents col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <h2 className="Presentation-recents__title text-white">Badges Recientes</h2>
                {data.map(badge => 
                    <Link className=" Presentation-recents__link text-reset text-decoration-none" key={badge.id} to={`/badges/${badge.id}`}>
                        <div className="Card">
                            <div className="Card__img">
                                <Gravatar className="Card__avatar" email={badge.email} alt="Avatar"></Gravatar>
                            </div>
                            <div className="Card__info">
                                <h4 className="Card__title-primary">{badge.firstName} {badge.lastName}</h4>
                                <h6 className="Card__title-secondary">{badge.jobTitle}</h6>
                                <p className="Card__text">{badge.email}</p>
                            </div>
                        </div>
                    </Link>
                )}
                
            </div>
        </div>
    </div>
)

export default Presentation