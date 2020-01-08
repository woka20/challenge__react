import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'
import {Provider} from 'unistore/react'
import Home from "../pages/MainPage"
import SignIn from "../pages/SignIn"
import Profile from "../pages/Profile"
import {store} from "../store"
import NewsAll from "../components/NewsAll"


class MainRoute extends React.Component{
    render(){
        return ( <Provider store={store}>
            <Router>
            <Switch>
                <Route exact path="/" component={NewsAll}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/logout" component={SignIn}/>
            </Switch>
        </Router>
        </Provider>)


    }
    


}

export default MainRoute;