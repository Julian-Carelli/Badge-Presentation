//Dependencies

import React from 'react'

//Components

import Redirection from '../components/Redirection'
import Card from '../components/Card'

//Assets

import '../assets/styles/pages/Badges.scss'

const Badges = ({state}) => (
    <>
        <div className="Badges">
            <Redirection></Redirection>
            <Card 
                state={state}>
            </Card>
        </div>
        
    </>
)

export default Badges