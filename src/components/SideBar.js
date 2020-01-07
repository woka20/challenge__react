import React from 'react'
import {SideList} from './ListSideBar'
import News from './News'


export class SideBar extends React.Component{
    render(){
        return  <table class="table-terkini">
                   <tr>
                       <td class="populer"><strong>< a href="#" >Berita Terkini</a></strong>&emsp; &emsp; &emsp;<a href="#" >lihat semua</a></td>
                   </tr>
                    <News/>
                </table>
    }
   
}

export default SideBar