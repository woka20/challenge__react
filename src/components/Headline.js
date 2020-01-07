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
                           <td class="data-head-img"><img class="api-img" src={this.props.img}/></td>
                       </tr>
                       <tr class="row-head">
                           <td class="data-head"><h1>{this.props.title}</h1> </td>
                       </tr>
                       <tr class="row-head">
                           <td class="data-head">{this.props.desc}</td>
                       </tr>
                       <br/>
                       <tr class="row-head">
                           <td class="data-head">{this.props.published}</td>
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