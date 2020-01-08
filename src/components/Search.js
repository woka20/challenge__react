import React from 'react'
import search from "../image/search.png"
export class SearchBar extends React.Component{
    render(){
        return <form>
                 <input type="text" onChange={this.onChange}  name="search"/>
             </form>
          
    }
   
}


export default SearchBar