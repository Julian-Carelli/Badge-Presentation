//Dependencies

import React from 'react'

//Components

import Gravatar from '../components/Gravatar'

//Assets

import Logo from '../assets/images/platziconf-logo.svg'
import '../assets/styles/components/Badge.scss'

const Badge = (props) => {

    const {firstName, lastName, email, jobTitle, twitter, id} = props.data
    

    return(
        <div className="Badge" key={id}>
            <div className="Badge__header">
                <img src={Logo} alt="Logo de la conferencia"></img>
            </div>
            <div className="Badge__section--name">
                <Gravatar className="Badge__avatar"
                email={email || 'example@example.com'}
                alt="Avatar"
                />
                <h1>{firstName} <br/> {lastName} </h1>
            </div>
            <div className="Badge__section--profesion">
                <p>{email}</p>
                <p>{jobTitle}</p>
                <div>{twitter}</div>
            </div>
            <div className="Badge__section--platziConf">
                <p>#PlatziConf</p>
            </div>
        </div>
    )
}
export default Badge