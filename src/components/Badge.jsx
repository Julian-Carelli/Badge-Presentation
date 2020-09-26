import React from 'react'
import Logo from '../assets/images/platziconf-logo.svg'
import '../assets/styles/components/Badge.scss'

const Badge = props => {
    return(
        <div className="Badge">
            <div className="Badge__header">
                <img src={Logo} alt="Logo de la conferencia"></img>
            </div>
            <div className="Badge__section--name">
                <img 
                    className="Badge__avatar"
                    src="https://www.gravatar.com/avatar?d=identicon"
                    alt="Avatar">
                </img>
                <h1>{props.form.firstName} <br/> {props.form.lastName} </h1>
            </div>
            <div className="Badge__section--profesion">
                <p>{props.form.jobTitle}</p>
                <p>{props.form.email}</p>
                <div>{props.form.twitter}</div>
            </div>
            <div className="Badge__section--platziConf">
                <p>#PlatziConf</p>
            </div>
        </div>
    )
}
export default Badge