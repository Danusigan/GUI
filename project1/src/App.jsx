import React, { useState } from 'react';

import './App.css'; 
import Header from './Header.jsx'



import Footer from './Footer.jsx'
import './Footer.css'
import { Login } from './components/Login.jsx';
import { Signup } from './Signup.jsx';
import { Home } from './Home.jsx'; 
import { Dashboard } from './Dashboard.jsx'; 



import { Enrolment } from './Enrolment.jsx'; 
import { Passpaperrecording } from './Passpaperrecording.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";


// import Home from './Home.jsx'

export const App = () => {
  
  return (
    <div className="app">
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path = '/signup' element = {<Signup />}/>
        <Route path = '/Home' element = {<Home />}/>
        <Route path = '/Enrolment' element = {<Enrolment />}/>
        <Route path = '/Passpaperrecording' element = {<Passpaperrecording/>}/>
        <Route path = '/Dashboard' element = {<Dashboard/>}/>
        
       
        
      </Routes>
    </Router>
    <Footer/>   

 
  
   </div>
  )
}




