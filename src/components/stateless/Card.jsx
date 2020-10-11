//Dependencies

import React from 'react'

//Components

import Gravatar from './Gravatar'

const Card = ({state}) => (
    <div className="Card col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="Card__img ">
            <Gravatar className="Card__avatar" email={state.email} alt="Avatar"></Gravatar>
        </div>
        <div className="Card__info text-dark ">
            <h4 className="Card__title-primary">{state.firstName} {state.lastName}</h4>
            <h5 className="Card__title-secondary">{state.jobTitle}</h5>
            <p className="Card__text">{state.email}</p>
            <p className="Card__text">{state.twitter}</p>
        </div>
    </div>
)

export default Card 