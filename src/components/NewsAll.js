import {Headline} from "./Headline"
import {NavBar} from "./Navbar"
import {SideBar} from "./SideBar"
import {SearchBar} from "./Search"
import axios from "axios"
import React from 'react'
import {actions, store} from "../store"
import { connect } from "unistore/react";
import {withRouter} from 'react-router-dom'


const API_KEY="c92b51632a1d41d0b0319657d21da15f"
const baseUrl="https://newsapi.org/v2/"


export class NewsAll extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         listNews:[],
    //         isLoading:true,
    //         keyword: "Manchester United"
    //     }
    // }
    state = {
        listNews:[],
        isLoading:true,
        keyword: "Manchester United"
    }
    
    componentDidMount = () =>{
        const self=this
        axios 
        .get(`https://newsapi.org/v2/everything?q=${this.state.keyword}&apiKey=`+API_KEY)
        .then(function(response){
            self.setState({listNews:response.data.articles, isLoading:false})
            console.log(response)
        })
        .catch(function(error){
            self.setState({isLoading:false})
        })
    }

    changeHandler = (e) => {
        console.warn(e.target.value)
        // this.props.handleInputChange(e.target.value)
        // this.props.cekAction()
        console.warn('cek store value', this.props.keyword)
        console.warn('cek state value', this.state)
        console.warn('cek props value', this.props)
        // this.props.handleInputChange();
    }
    
        
    render(){
        const{listNews,isLoading}=this.state
        console.log(listNews)
        const everthingNews=listNews.filter(item =>{
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
                                  
                               <p>Search: <input onChange={this.changeHandler} /></p>
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



export default connect("keyword", actions)(withRouter(NewsAll));
