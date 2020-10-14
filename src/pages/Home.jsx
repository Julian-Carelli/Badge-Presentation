//Dependencies

import React  from 'react'

//Components

import Presentation from '../components/stateless/Presentation';

//Assets

import '../assets/styles/pages/Home.scss';

const Home = ({data}) => (
    <>
        <Presentation data={data}></Presentation>
    </>
)

export default Home