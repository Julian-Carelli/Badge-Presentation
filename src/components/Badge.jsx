import React from 'react'
import Logo from '../assets/images/platziconf-logo.svg'
import '../assets/styles/components/Badge.scss'
import Gravatar from '../components/Gravatar'

const Badge = (props) => {


    const {firstName, lastName, email, jobTitle, twitter} = props.form
    

    return(
        <div className="Badge">
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