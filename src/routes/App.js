import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Pages
import Layout from '../components/Layout'
import Home from '../pages/Home'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'
import ISE from '../pages/InternalServerError'

const App = () => (

    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={ISE}></Route>
                <Route exact path="/badges" component={Badges}></Route>
                <Route exact path="/badges/new" component={BadgeNew}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App