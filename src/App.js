import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoute from "./routes/MainRoute"


import MainPage from "./pages/MainPage"
import News from "./components/News"

class App extends Component{
  render(){
    return <MainRoute {...this.props}/>
  }
}


export default App;
