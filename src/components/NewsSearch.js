import {Headline} from "./Headline"

import axios from "axios"
import React from 'react'

const API_KEY="44687f6f58184f6385947cb55a41ac62"
const baseUrl="https://newsapi.org/v2/"


export class NewsSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listNews:[],
            isLoading:true,
            keyword: "persib"
        }
    }
    
    // onChange =e=>{
    //     console.log("HOOOOOOOOOOOOOOOOOOOOO",e.target.value)
    //     this.setState({keyword: e.target.value})
    // }

    componentDidMount = () =>{

        const self=this
        axios 
        .get(`https://newsapi.org/v2/everything?q=${this.state.keyword}&apiKey=`+API_KEY)
        .then(function(response){
            self.setState({listNews:response.data.articles, isLoading:false})
            console.log("APAAAAAAAAAAAA",response)

        })
        .catch(function(error){
            self.setState({isLoading:false})
        })
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
        
        const AllNews = everthingNews.map((item,key) => {
            return( <Headline 
                   key={key}
                   title={item.title}
                   img={item.urlToImage}
                   desc={item.description}
                   content={item.content}
                   published={item.published}
                />)
        })

        return <div class="AllNews">
            {isLoading?<div style={{textAlign:"center"}}>Loading....</div>: AllNews }
             </div>
    }
}

export default NewsSearch