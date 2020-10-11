//Dependencies
import React from 'react'

//Components

import Navbar from './Navbar'

const Layout = ({children}) => (
    <>
        <Navbar></Navbar>
        {children}
    </>
)


export default Layout