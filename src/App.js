import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Link, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./pages/homepage"
import Body from "./pages/body"
import Footer from "./pages/contact"
import About from "./pages/about"
import Penampang from "./pages/penampang"
import Forms from "./components/Form"

// class App extends Component {
//   render() {
//     return (
//       <Header />
//    )
//  }
// }

// class App extends Component {
//   render() {
//     return (
//       <About />
//    )
//  }
// }


class App extends Component {
  render() {
    return (
      <Footer />
   )
 }
}


export default App;






