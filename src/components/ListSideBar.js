import React from 'react'


export class SideList extends React.Component{
    render(){
        return  (<tr>
                  <td class="populer2"><span class="badge badge-danger">#</span><a href="#" class="dataTable">{this.props.title}</a></td>
                 </tr>)
    }
   
}

export default SideList


