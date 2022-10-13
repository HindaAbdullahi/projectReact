

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigation from './navigation'
import Card from './card/cardUI'
import Contact from './contact'

import css from './contact.css';

import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'

ReactDOM.render(

<Router>
    <Navigation/>
   
    <Routes>
      
      {/* <Route path='/' element={}/>, */}
      <Route path='/App' element={<App/>}/>,
       {/* <Route path='/cardUI' element={<Ourteam/>}/> */}
      <Route path='/Contact' element={<Contact/>}/> 
    </Routes>
  </Router>, document.getElementById('root'));