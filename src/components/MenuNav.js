import React from 'react'

export class MenuNav extends React.Component{
    render(){
        const pages=["Home", "Experiences","About","Contact"];
        const NavLinks=pages.map(page=>{
           return  <li><a href={'/'+ page}>{page}</a></li>
        })
         return <ul>{NavLinks}</ul> 
    }
}

export default MenuNav