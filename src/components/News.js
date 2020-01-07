import {SideList} from "./ListSideBar"

import axios from "axios"
import React from 'react'

const API_KEY="44687f6f58184f6385947cb55a41ac62"
const baseUrl="https://newsapi.org/v2/"
const urlHeadline=baseUrl+"top-headlines?country=id&apiKey="+API_KEY;


export class News extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listNews:[],
            isLoading:true
        }
    }
    componentDidMount = () =>{

        const self=this
        axios 
        .get(urlHeadline)
        .then(function(response){
            self.setState({listNews:response.data.articles, isLoading:false})
            console.log(response)
        })
        .catch(function(error){
            self.setState({isLoading:false})
        })
    }
    render(){
        const{listNews,isLoading}=this.state
        console.log("HOYA",listNews)
        const topHeadlines=listNews.filter(item =>{
            if (item.description != null && item.urlToImage != null){
                return item
                
            }
            return false
        }).slice(0,5)
        console.log("HOYA2",topHeadlines)
        const headlineNews = topHeadlines.map((item,key) => {
            return( <SideList 
                   key={key}
                   title={item.title}
                   img={item.urlToImage}
                   desc={item.description}
                   content={item.content}
                   published={item.published}
                />)
        })

        return <div class="headlineNews">
            {isLoading?<div style={{textAlign:"center"}}>Loading....</div>: headlineNews }
             </div>
    }
}

export default News