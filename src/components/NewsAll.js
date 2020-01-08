import Headline from "./Headline"
import NavBar from "./Navbar"
import SideBar from "./SideBar"
import {SearchBar} from "./Search"
import axios from "axios"
import React from 'react'
import {actions, store} from "../store"
import { connect } from "unistore/react";
import {withRouter} from 'react-router-dom'


const API_KEY="c92b51632a1d41d0b0319657d21da15f"
const baseUrl="https://newsapi.org/v2/"


class NewsAll extends React.Component{
    
    componentDidMount = () =>{
        const self=this
        axios 
        .get(`https://newsapi.org/v2/everything?q=${this.props.keyword}&apiKey=`+API_KEY)
        .then(function(response){
            store.setState({listNews:response.data.articles, isLoading:false})
            console.log(response)
        })
        .catch(function(error){
            store.setState({isLoading:false})
        })
    }

    changeHandler = (e) => {
        console.warn(e.target.value)
        // this.props.handleInputChange(e.target.value)
        // this.props.cekAction()
        console.warn('cek store value', this.props)
        console.warn('cek props value', this.props.slice)
        console.warn('cek state value', this.state)
        // this.props.handleInputChange();
    }
    
        
    render(){
        
        console.log(this.props.listNews)
        const everthingNews=this.props.listNews.filter(item =>{
            if (item.description != null && item.urlToImage != null){
                return item
                
            }
            return false
        }) 
        return (
            <div>
                     <NavBar/>
                      <div class= "container-fluid">
                          <div class="row">
                             <div class="col-4">
                                  <SideBar />
                                  
                          </div>
                              <div class="col-8">
                                  
                               <p>Search: <input onChange={(e)=>this.props.handleInputChange(e)} /></p>
                              {everthingNews.map((item,key) =>(
                                  <Headline
                                  key={key}
                                  title={item.title}
                                  img={item.urlToImage}
                                  content={item.description}
                                  url={item.url}/>)
                                )}
                            </div>
                         </div>
                      </div>
                 
        </div>

    );
  }
}



export default connect("listNews, keyword, slice", actions)(withRouter(NewsAll));
