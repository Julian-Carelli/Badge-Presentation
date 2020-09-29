//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import Gravatar from '../components/Gravatar'

//Assets

import '../assets/styles/components/Card.scss'



const Card = (props) => {


    const {state} = props

    const stateReverse = state.slice(0).reverse()

    return(
        <div className="container">
            {stateReverse.map(state => 
                <Link className="text-reset text-decoration-none" key={state.id} to={`/badges/${state.id}`}>
                    <div  className="row Card bg-danger">
                        <div className="col-6 Card__img">
                            <Gravatar email={state.email} alt="Avatar"></Gravatar>
                        </div>
                        <div className="col-6 Card__text">
                            <h2>{state.firstName} {state.lastName}</h2>
                            <h3>{state.jobTitle}</h3>
                            <p>{state.email}</p>
                            <p>{state.twitter}</p>
                        </div>
                    </div>
                </Link>
                
                )}
        </div>
    )
}

export default Card