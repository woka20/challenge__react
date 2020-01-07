import React from 'react'
import {NavBar} from "../components/Navbar"
import {SideBar} from "../components/SideBar"
import {Headline} from "../components/Headline"
import {News} from "../components/News"
import {NewsAll} from "../components/NewsAll"


class MainPage extends React.Component{
    render(){
        return <div>
                     <NavBar />
                     <div class= "container-fluid">
                         <div class="row">
                             <div class="col-4">
                                 <SideBar />
                             </div>
                             <div class="col-8">
                                 <NewsAll />
                             </div>
                         </div>
                     </div>
                 
        </div>
   
    }
}

export default MainPage