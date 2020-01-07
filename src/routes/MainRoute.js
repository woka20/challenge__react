import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'

import Home from "../pages/MainPage"
import SignIn from "../pages/SignIn"
import Profile from "../pages/Profile"


const MainRoute =() =>{
    return ( <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exactpath="/profile" component={Profile}/>
        </Switch>
    </Router>)


}

export default MainRoute