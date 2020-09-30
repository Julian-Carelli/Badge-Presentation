//Dependencies

import React  from 'react'

//Components

import Footer from '../components/Footer'
import Presentation from '../components/Presentation'

const Home = ({state}) => (
    <>
        <Presentation state={state}></Presentation>
        <Footer></Footer>
    </>
)

export default Home