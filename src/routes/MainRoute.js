import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'

import Home from "../pages/MainPage"
import SignIn from "../pages/SignIn"
import Profile from "../pages/Profile"
import CategoryNews from "../pages/CategoryNews"

const MainRoute =() =>{
    return ( <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/logout" component={SignIn}/>
            <Route path="/:category" component={CategoryNews}/>
        </Switch>
    </Router>)


}

export default MainRoute