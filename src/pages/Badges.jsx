//Dependencies

import React from 'react'

//Components

import Redirection from '../components/stateless/Redirection'
import Container from '../components/stateful/Container'

//Assets

import '../assets/styles/pages/Badges.scss'

const Badges = ({data}) => (
    <>
        <div className="Badges">
            <Redirection></Redirection>
            <Container
                data={data}>
            </Container>
        </div>
        
    </>
)

export default Badges