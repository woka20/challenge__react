import React from 'react'
import fb from '../img/ic_fb.png'
import tweet from '../img/ic-twitter.png'
import ig from '../img/ic-instagram.png'
import linked from '../img/ic-linkedin.png'


export class FooterBar extends React.Component{
    render(){
        return<div class="col-3">
                <p class="sosial">Sosial Media</p>
                <img class="sosmed" src={fb}/>
                <img class="sosmed" src={tweet}/>
                <img class="sosmed" src={ig}/>
                <img class="sosmed" src={linked}/>
              </div>
    }
}  


export default FooterBar
