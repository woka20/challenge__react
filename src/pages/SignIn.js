import React from 'react'
import axios from 'axios'

class SignIn extends React.Component{
    state={
        name:"",
        password:""
    };
    changeInput= e =>{
        this.setState({[e.target.name]: e.target.value})
        console.log("KOL")
    }; 
    postLogin = () => {
    
        const {name, password}=this.state;
        const data={ username: name,
        kataKunci: password};
        
    
    const self=this
    axios 
    .post("https://woka20.free.beeceptor.com/signin", data)
    .then(function(response){
        if(response.data.hasOwnProperty('api_key')){
            localStorage.setItem("api_key", response.data.api_key)
            localStorage.setItem("isLogin", true)
            localStorage.setItem("full_name", response.data.name)
            localStorage.setItem("email", response.data.email)
        }
        
        self.props.history.push("/profile")
    })
    .catch(function(error){
        alert("SALAH")
        console.log(error)
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

export default SignIn