import React from 'react'
import Saskeh from "../image/saskeh.jpeg"
import love from "../image/love.png"
import dislike from "../image/dislike.png"
import share from "../image/share.png"

export class Headline extends React.Component{
    render(){
        return  <div>
                   <table id="headline">
                       <tr class="row-head">
                           <td class="data-head"><img src={Saskeh}/></td>
                       </tr>
                       <tr class="row-head">
                           <td class="data-head"><h1>Kocaknya Iklan Kacang Mayasi yang Memarodikan Naruto Ini</h1> </td>
                       </tr>
                       <tr class="row-head">
                           <td class="data-head"> Siapa yang tidak kenal dengan Naruto? Sosok ninja rekaan Masashi Kishimoto ini begitu digemari oleh jutaan penggemarnya di seluruh dunia. Berangkat dari fenomena ini,....</td>
                       </tr>
                       <br/>
                       <tr class="row-head">
                           <td class="data-head">Last update 13 mins ago</td>
                       </tr>
                       <br/>
                       <tr class="row-head">
                           <td class="data-head-icon"><img class="image-head" src={love}/><img class="image-head"  src={share}/><img class="image-head" src={dislike}/></td>
                       </tr>
                   </table>
                </div>
      
        
    }
}

export default Headline