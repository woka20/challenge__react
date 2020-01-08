import {Headline} from "../components/Headline"
import {NavBar} from "../components/Navbar"
import {SideBar} from "../components/SideBar"
import axios from "axios"
import React from 'react'

const API_KEY="c92b51632a1d41d0b0319657d21da15f"
const baseUrl="https://newsapi.org/v2/"


export class CategoryNews extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listNews:[],
            isLoading:true,
            keyword: "Manchester United"
        }
    }

    requestCategory = async()=>{
        const params= this.props.match.params.category

        const self=this
        await axios
        .get(`https://newsapi.org/v2/top-headlines?country=id&category=${params}&apiKey=`+API_KEY)
        .then(function(response){
        self.setState({listNews:response.data.articles, isLoading:false})
        console.log("TTTTTABUTI", response)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    
    RouterChanger= ( categoryName)=>{
        const category = categoryName
        this.props.history.replace("/"+category)
        this.requestCategory()


    }

    handleInputChange = e => {
        console.log("event", e.target.value);
        let value = e.target.value;
        this.props.searchNews(value);
    };
    searchNews = async keyword => {
        const self = this;
        if (keyword.length > 2) {
          try {
            const response = await axios.get(
              baseUrl + "everything?q=" + keyword + "&apiKey=" + API_KEY
            );
            self.setState({ listNews: response.data.articles });
          } catch (error) {
            console.error(error);
          }
        }
      };
    
    componentDidMount = () =>{
        this.requestCategory()
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
            <React.Fragment>
                     <NavBar searchCategory={e=>this.RouterChanger(e)} isCategory={true}/>
                      <div class= "container-fluid">
                          <div class="row">
                             <div class="col-4">
                                  <SideBar />
                                  
                          </div>
                              <div class="col-8">
                                  {/* <SearchBar onChange={(e) => this.searchNews(e.target.value)}/> */}
                               <p>Search: <input onChange={(e) => this.searchNews(e)} /></p>
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
            </React.Fragment>
        )
    }
}

export default CategoryNews