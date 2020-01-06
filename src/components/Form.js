import React from 'react'
import diskusi from '../img/charles-rRWiVQzLm7k-unsplash.jpg'
import logo2 from "../img/logo-ALTA-v2@2x.png"

export class Forms extends React.Component{
    render(){
        return(
        <div class="container">
            <div class="row kontak">
               <div class="col-5 gambar-form">
                 <div class="side-image">
                   <img id="diskusi" src={diskusi}/>
                   <img id="logo2" src={logo2}/>
                 </div>
                
               </div>
               <div class="col-5 contact-form">
                 <form action="">
                     <div class="contact name">
                      <label for="full-name">Full Name</label>
                      <span>*</span><br/>
                      <input type="text" id="full-name" name="fullName" placeholder="Alterra" required/>
                    </div>
                    <div class="contact email">
                        <label for="email">Email Address</label>
                        <span>*</span><br/>
                        <input type="text" id="email" name="email" placeholder="example@alterra.id" required/>
                    </div>
                    <div class="contact phone">
                        <label for="phone-number">Phone Number</label>
                        <span>*</span><br/>
                        <input type="text" id="phone-number" name="phoneNumber" placeholder="081234567890" required/>
                    </div>
                    <div class="contact role">
                        <label for="role">Role</label><br/>
                        <select id="role" name="role">
                            <option value="selected">Selected ...</option>
                            <option value="indonesian">Indonesian</option>
                            <option value="author">Author</option>
                            <option value="writer">Writer</option>
                        </select>
                    </div>
                    <div class="contact message">
                        <label for="message">Message</label><br/>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <input id="submit-button" type="submit" value="Submit"></input>
                  </form>
                </div>
            </div>
        </div>

    )
  }
}


export default Forms