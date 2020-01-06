import React from 'react'
import titik from '../img/img-dot.png'
import anna from '../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import {Table} from '../components/Table'
import {Anna} from '../components/AboutAnna'
import {NavBar} from "../components/NavigationBar"
import {Second} from "../components/Seconhead"
import {FootNav} from "../components/Footer"
import {Forms} from "../components/Form"

export class About extends React.Component{
    render(){
        return (
        <div>
            <NavBar />
            <Forms/>
            <FootNav />
    </div>
        )
    }
}

export default About