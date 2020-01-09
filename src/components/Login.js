import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

export class Login extends React.Component{
    render(){
        return  <ul id="login">
            <li class="MenuNav"><Link to="/signin">Masuk</Link></li>
            <li class="MenuNav"><Link to="/">Home</Link></li>
        </ul>
    }
   
}

export default Login