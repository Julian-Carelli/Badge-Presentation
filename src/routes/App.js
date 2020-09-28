//Dependencies

import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Component

import Layout from '../components/Layout'

//Pages

import Home from '../pages/Home'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetailsContainer'
import NotFound from '../pages/NotFound'

const App = () => (

    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/badges" component={Badges}></Route>
                <Route exact path="/badges/new" component={BadgeNew}></Route>
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}></Route>
                <Route exact path="/badges/:badgeId" component={BadgeDetails}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App