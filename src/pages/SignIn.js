import React from 'react'
import axios from 'axios'
import {actions, store} from "../store"
import { connect } from "unistore/react";
import {withRouter} from 'react-router-dom'

class SignIn extends React.Component{
    state={
        username:"", kataKunci:""
    }

    changeInput= e =>{
        store.setState({[e.target.name]: e.target.value})
        console.warn("KOL", this.props.api_key)
    }
    postLogin = () => {
    
        const {name, password}=this.state;
        const data={ username: name,
        kataKunci: password};

    
    const self=this
    axios 
    .post("https://woka20.free.beeceptor.com/signin", data)
    .then((response)=>{
        if(response.data.hasOwnProperty('api_key')){
            store.setState({api_key:response.data.api_key, isLogin: true, name: response.data.name,email:response.data.email})
            // console.warn("KOL2", this.props.api_key)
        }
        console.log("KOL2", this.props.api_key)
        
        self.props.history.push("/profile")
    })
    .catch(function(error){
        alert("SALAH")
        
    })

};
    render(){
        return (
           <form onSubmit={e => e.preventDefault()}>
               <h2>Login Form</h2>
               <div>
                   <label> Username</label>
                    <input type="text"  onChange={e => this.changeInput(e)}/>
               </div>
               <div>
                   <label> Password</label>
                    <input type="password"  onChange={e => this.changeInput(e)}/>
               </div>
               <button
                style={{
                height: "30px",
                width: "80px",
                backgroundColor: "red",
                color: "white"
              }}
              onClick={() => this.postLogin()}
            >
              SignIn
            </button>
            
           </form>)
        
    }
   
}


export default connect("api_key, name, email, isLogin, password", actions)(withRouter(SignIn));