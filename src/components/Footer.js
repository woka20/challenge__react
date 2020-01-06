import React from 'react'
import alterra from "../img/logo-ALTA-v2.png"

import {FooterBar}from "./FooterBar"

export class FootNav extends React.Component{
    render(){
        return(
         <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                       <img id="logo" src={alterra}/>
                    </div>
                    <FooterBar/>
                    <div class="col-4">
                        <p class="copyright">Copyright @2019</p>
                    </div>
                </div>
            </div>
        </footer>         
                
            
        )
    }

}

export default FootNav