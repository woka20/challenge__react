import React from 'react'
import {NavBar} from "../components/Navbar"
import {SideBar} from "../components/SideBar"
import {Headline} from "../components/Headline"
import {News} from "../components/News"
import NewsAll from "../components/NewsAll"
import {NewsSearch} from "../components/NewsSearch"
import {actions, store} from "../store"

class MainPage extends React.Component{
    render(){
        return <NewsAll/>
  
   
    }
}

export default MainPage