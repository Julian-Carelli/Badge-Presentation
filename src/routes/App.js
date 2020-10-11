//Dependencies

import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Component

import Layout from '../components/stateless/Layout'

//Containers

import BadgeNew from '../containers/BadgeNewContainer'
import Badges from '../containers/BadgesContainer'
import BadgeEdit from '../containers/BadgeEditContainer'
import BadgeDetails from '../containers/BadgeDetailsContainer'
import Home from '../containers/HomeContainer'

//Pages

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