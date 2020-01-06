import React from 'react'
import titik from '../img/img-dot.png'
import anna from '../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import {Table} from '../components/Table'
import {Anna} from '../components/AboutAnna'
import {NavBar} from "../components/NavigationBar"
import {Second} from "../components/Seconhead"
import {FootNav} from "../components/Footer"

export class About extends React.Component{
    render(){
        return (
        <div>
            <NavBar />
            <Second />
             <div class="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-7 content-about">
                        <Anna />
                        <Table />
                     
                    </div>
                    <div class="col-5 foto-about">
                        <img class="titik"src={titik}/>
                        <img class="anna" src={anna}/>
                    </div>
                </div>
            </div>
        </div>
        <FootNav />
    </div>
        )
    }
}

export default About