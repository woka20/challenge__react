import {Headline} from "./Headline"
import {NavBar} from "./Navbar"
import {SideBar} from "./SideBar"
import {SearchBar} from "./Search"
import axios from "axios"
import React from 'react'

const API_KEY="c92b51632a1d41d0b0319657d21da15f"
const baseUrl="https://newsapi.org/v2/"


export class NewsAll extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listNews:[],
            isLoading:true,
            keyword: "Manchester United"
        }
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
    handleInputChange = e => {
        console.log("event", e.target.value);
        let value = e.target.value;
        this.props.searchNews(e);
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
                     <NavBar />
                      <div class= "container-fluid">
                          <div class="row">
                             <div class="col-4">
                                  <SideBar />
                                  
                          </div>
                              <div class="col-8">
                                  {/* <SearchBar onChange={(e) => this.searchNews(e.target.value)}/> */}
                               <p>Search: <input onChange={(e) => this.searchNews(e.target.value)} /></p>
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
    //     <React.Fragment>
    //     <NavBar
    //       doSearch={event => this.handleInputChange(event)}
    //       placeholder="ketik sesuatu"
    //       {...this.props}
    //     />
       
    //     <p>Type to search news here: <input onChange={(e) => this.searchNews(e.target.value)} /></p>
    //     <div className="headlineNews">
    //       {isLoading ? (
    //         <div style={{ textAlign: "center" }}>Loading...</div>
    //       ) : (
    //           <div>
    //             {everthingNews.map((item, key) => (
    //               <Headline
    //                 key={key}
    //                 title={item.title}
    //                 img={item.urlToImage}
    //                 content={item.description}
    //                 url={item.url}
    //               />
    //             ))}
    //           </div>
    //         )}
    //     </div>
    //   </React.Fragment>
    );
  }
}

        
//         const AllNews = everthingNews.map((item,key) => {
//             return( <div>
//                 <NavBar  doSearch={this.props.handleInputChange} keyword={this.props.keyword}/>
//                 <div class= "container-fluid">
//                     <div class="row">
//                         <div class="col-4">
//                             <SideBar />
//                         </div>
//                         <div class="col-8">
//                         <Headline key={key}
//                         title={item.title}
//                         img={item.urlToImage}
//                         desc={item.description}
//                         content={item.content}
//                         published={item.published}/>
//                         </div>
//                     </div>
//                 </div>     
//             </div>   
//      )}
//      )

//         return <div class="AllNews">
//             {isLoading?<div style={{textAlign:"center"}}>Loading....</div>: AllNews }
//              </div>
//     }
// }

export default NewsAll