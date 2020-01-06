import React from 'react'
import search from "../image/search.png"
export class SearchBar extends React.Component{
    render(){
        return  <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><img src={search}/></button>
                </form>
            //   </div>
    }
   
}

export default SearchBar