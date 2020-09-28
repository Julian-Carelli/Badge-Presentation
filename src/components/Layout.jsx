//Dependencies
import React from 'react'

//Components

import Navbar from '../components/Navbar'

const Layout = ({children}) => {
    return(
        <>
        <Navbar></Navbar>
        {children}
        </>
    )
}

export default Layout