//Dependencies

import React from 'react'

//Assets

import '../assets/styles/components/BackgroundBadge.scss'

const BackgroundBadge = ({firstName, lastName}) => (

    <div className="container-fluid backgroundBadge">
        <div className="backgroundBadge-row row">
            <div className="backgroundBadge__title col-12 text-center">
                <h1>{firstName} {lastName}</h1>
            </div>
        </div>
    </div>
)


export default BackgroundBadge