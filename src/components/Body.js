import React from 'react'
import logo from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"

export class Homes extends React.Component{
    render(){
        return <div class="container-fluid">
                <div class="row">
                    <div class="col-5">
                         <img id="gambar" src={logo}/>
                </div>
                <div class="col-1"></div>
                <div class="col-6">
                    <div class="sullivan">
                     <h5>Hello, My name is</h5>
                     <h1><strong>Anna Sullivan</strong></h1>
                     <h3>I build things for the web</h3>
                     <input class="home-submit" type="submit" value="Get In Touch"></input>
                    </div>
                </div>
            </div>
        </div>
        
    }

}


export default Homes