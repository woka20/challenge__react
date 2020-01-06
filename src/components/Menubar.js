import React from 'react'


export class Menubar extends React.Component{
    render(){
        const lists=['Sepakbola', 'Ekonomi', 'Politik', 'Hiburan']
        const NavLink=lists.map(list=>{
            return  <li class="MenuNav"><a href={'/'+ list}>{list}</a></li>
        })
         return <ul class="upper">{NavLink}</ul> 
        
    }
}

export default Menubar