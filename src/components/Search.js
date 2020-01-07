import React from 'react'
import search from "../image/search.png"
export class SearchBar extends React.Component{
    render(){
        return <input type="text" onChange={this.onChange}  name="search"/>
                    
          
    }
   
}


export default SearchBar