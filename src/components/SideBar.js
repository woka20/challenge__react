import React from 'react'


export class SideBar extends React.Component{
    render(){
        return  <table class="sidenav">
                   <tr>
                       <td class="populer"><strong>< a href="#" >Berita Terkini</a></strong>&emsp; &emsp; &emsp;<a href="#" >lihat semua</a></td>
                   </tr>
                   <tr>
                       <td class="populer2"> <span class="badge badge-danger">#1</span><a href="#" class="dataTable">Ayo Bergabung Dengan ALTA Batch 5!</a></td>
                   </tr>
                   <tr>
                       <td class="populer2"><span class="badge badge-danger">#2</span><a href="#" class="dataTable">Saskeh Dan Narto "Gebuk" Akatskuy</a></td>
                       
                   </tr>
                   <tr>
                       <td class="populer2"><span class="badge badge-danger">#3</span><a href="#" class="dataTable">Tonight Show Menang PGA 2019</a></td>
                   </tr>
                   <tr>
                   
                       <td class="populer2"><span class="badge badge-danger">#4</span><a href="#" class="dataTable">Hidup Indah Tanpa Hutang</a></td>
                   </tr>
                   <tr>
                       <td class="populer2"> <span class="badge badge-danger">#5</span><a href="#"  class="dataTable">Saskeh Jadi Hokage [Akhirnya]</a></td>
                   </tr>

                </table>
    }
   
}

export default SideBar