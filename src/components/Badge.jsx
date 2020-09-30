//Dependencies

import React from 'react'

//Components

import Gravatar from '../components/Gravatar'

//Assets

import Logo from '../assets/images/platziconf-logo.svg'
import '../assets/styles/components/Badge.scss'

const Badge = ({data}) => (

    <div className="Badge" key={data.id}>
        <div className="Badge__header">
            <img src={Logo} alt="Logo de la conferencia"></img>
        </div>
        <div className="Badge__section--name">
            <Gravatar className="Badge__avatar"
            email={data.email || 'example@example.com'}
            alt="Avatar"
            />
            <h1>{data.firstName} <br/> {data.lastName} </h1>
        </div>
        <div className="Badge__section--profesion">
            <p>{data.email}</p>
            <p>{data.jobTitle}</p>
            <div>{data.twitter}</div>
        </div>
        <div className="Badge__section--platziConf">
            <p>#PlatziConf</p>
        </div>
    </div>
)

export default Badge