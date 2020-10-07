//Dependencies

import React from 'react'

//Assets

import '../assets/styles/components/BackgroundBadge.scss'

const BackgroundBadge = ({firstName, lastName}) => (

    <div className="BackgroundBadge container-fluid">
        <div className="BackgroundBadge-row row">
            <div className="BackgroundBadge-row__info col col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h1 className="BackgroundBadge-row__title">{firstName} {lastName}</h1>
            </div>
        </div>
    </div>
)


export default BackgroundBadge