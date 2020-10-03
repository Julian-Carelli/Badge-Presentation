//Dependencies

import React from 'react'

//Assets

import Header from '../assets/images/badge-header.svg'
import '../assets/styles/components/BackgroundBadge.scss'

const BackgroundBadge = ({firstName, lastName}) => (

    <div className="container-fluid BackgroundBadge">
        <div className="row">
            <div className="col-12 text-center">
                <h1>{firstName} {lastName}</h1>
            </div>
        </div>
    </div>
)


export default BackgroundBadge