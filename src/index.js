import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import BarNav from './pages/homepage'
import Homes from './pages/body'
import 'bootstrap/dist/css/bootstrap.css';
import Second from './components/Seconhead'

// ReactDOM.render(
//   <BarNav/>,
//   document.getElementById('header')
// );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Second/>,
//   document.getElementById('penampang')
// );
