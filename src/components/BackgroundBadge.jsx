//Dependencies

import React from 'react'

//Assets

import Header from '../assets/images/badge-header.svg'
import '../assets/styles/components/BackgroundBadge.scss'

const BackgroundBadge = (props) => {

   const {firstName, lastName} = props


    return(
        <div className="container-fluid BackgroundBadge">
            <div className="row">
                <div className="col-6">
                    <img className="BadgeNew__hero--img img-fluid" src={Header} alt="Header de la conferencia"></img>
                </div>
                <div className="col-6">
                    <h1>{firstName} {lastName}</h1>
                </div>
            </div>
        </div>
    )
}

export default BackgroundBadge