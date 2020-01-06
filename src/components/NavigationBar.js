import React from 'react'
import alterra from "../img/logo-ALTA.png"
import {MenuNav} from "../components/MenuNav"

export class NavBar extends React.Component{
    render(){
        return  <header id="header">
            <div class="container-fluid container-nav">
                <div class="row">
                    <div class="col-3">
                       <img id="logo" src={alterra}/>
                    </div>
                    <div class="col-9 col-9-nav">
                        <p><MenuNav /></p>
                    </div>
                </div>
            </div>
        </header> 
    
    }

}

export default NavBar