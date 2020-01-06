import React from 'react'
import news from "../image/logo512.png"
import {Menubar} from "../components/Menubar"
import{Dropdown} from "../components/Dropdown"
import {SearchBar} from "../components/Search"
import{Login} from "../components/Login"

export class NavBar extends React.Component{
    render(){
        return  <header id="header">
            <div class="container-fluid container-nav">
                <div class="row">
                    <div class="col-2">
                       <img id="news" src={news}/>
                       <p class="redaksi">KabarKabar</p>
                       <Menubar />
                    </div>
                    <div class="col-10 col-10-nav">
                    
                     <Dropdown/>
                     <SearchBar/>
                     <Login />
                    </div>
                </div>
            </div>
        </header> 
    
    }

}

export default NavBar