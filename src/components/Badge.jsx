//Dependencies

import React from 'react'

//Components

import Gravatar from '../components/Gravatar'

//Assets

import Logo from '../assets/images/platziconf-logo.svg'
import '../assets/styles/components/Badge.scss'

const Badge = ({data}) => (

    <div className="Badge container">
        <div className="Badge__row row">
            <div className="Badge-body col col-sm-12 col-md-12 col-xl-12" key={data.id}>
                <div className="Badge-body__background">
                    <img className="Badge-body__img" src={Logo} alt="Logo de la conferencia"></img>
                </div>
                <div className="Badge-body__email">
                    <Gravatar className="Badge-body__avatar"
                    email={data.email || 'example@example.com'}
                    alt="Avatar"
                    />
                    <h1 className="Badge-body__title">{data.firstName} <br/> {data.lastName} </h1>
                </div>
                <div className="Badge-body__profesion">
                    <p className="Badge-body__text">{data.email}</p>
                    <p className="Badge-body__text">{data.jobTitle}</p>
                    <div className="Badge-body__span">{data.twitter}</div>
                </div>
                <div className="Badge-body__platziConf">
                    <p className="Badge-body__text">#PlatziConf</p>
                </div>
            </div>
        </div>
    </div>

)

export default Badge