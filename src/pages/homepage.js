import React from 'react'
import alterra from "../img/logo-ALTA.png"
import {NavBar}from "../components/NavigationBar"
import {Menu} from "../components/MenuNav"
import {FooterBar} from "../components/FooterBar"
import{Penampang} from "../components/Container"
import {Homes} from "../components/Body"
import logo from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"

class BarNav extends React.Component{
    render(){
        return <div id="bg-head">
               <NavBar />
               <Homes />
            
            </div>
            
        }
    
    }
                
        
                
            
        


export default BarNav