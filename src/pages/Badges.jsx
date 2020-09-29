//Dependencies

import React from 'react'

//Components

import Background from '../components/Background'
import Redirection from '../components/Redirection'
import Card from '../components/Card'

const Badges = ({state}) => (
    <>
        <Background></Background>
        <Redirection></Redirection>
        <Card 
            state={state}>
        </Card>
    </>
)

export default Badges