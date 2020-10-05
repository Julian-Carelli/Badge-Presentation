//Dependencies

import React from 'react'

//Components

import Gravatar from '../components/Gravatar'

//Assets

import Logo from '../assets/images/platziconf-logo.svg'
import '../assets/styles/components/Badge.scss'

const Badge = ({data}) => (

    <div className="Badge" key={data.id}>
        <div className="Badge__background">
            <img className="Badge__img" src={Logo} alt="Logo de la conferencia"></img>
        </div>
        <div className="Badge__email">
            <Gravatar className="Badge__avatar"
            email={data.email || 'example@example.com'}
            alt="Avatar"
            />
            <h1 className="Badge__title">{data.firstName} <br/> {data.lastName} </h1>
        </div>
        <div className="Badge__profesion">
            <p className="Badge__text">{data.email}</p>
            <p className="Badge__text">{data.jobTitle}</p>
            <div className="Badge__span">{data.twitter}</div>
        </div>
        <div className="Badge__platziConf">
            <p className="Badge__text">#PlatziConf</p>
        </div>
    </div>
)

export default Badge