import React from 'react'


export class Menubar extends React.Component{
    render(){
        const lists=['sports','science', 'business']

        const NavLink=lists.map(list=>{
            return  <li class="MenuNav"><a onClick={()=>this.props.searchCategory(list)}>{list}</a></li>
        })
         return <ul class="upper">{NavLink}</ul> 
        
    }
}

export default Menubar