import React from 'react'


export class Dropdown extends React.Component{
    render(){
        return <div class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Lainnya</a>
                  <div class="dropdown-menu">
                   <a href="#" class="dropdown-item">Action</a>
                   <a href="#" class="dropdown-item">Another action</a>
                  </div>
               </div>
        
    }
}

export default Dropdown