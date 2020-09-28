//Dependencies

import React from 'react'

//Assets

import '../assets/styles/components/Background.scss'
import Header from '../assets/images/badge-header.svg'


const Background = props => (
    <div className="BadgeNew__hero">
        <img className="BadgeNew__hero--img img-fluid" src={Header} alt="Header de la conferencia"></img>
    </div>
)

export default Background