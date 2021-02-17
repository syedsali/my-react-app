/* eslint-disable no-unused-vars */
import React,{ Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Section from "./Components/Section";






function App(){
  return(
    <div>
    <Router>
      <Switch>
        
        <Route exact path= "/" Component ={Home} />
        <Route exact path= "/Contactme" Component ={Contact} />
        <Route exact path= "/About" Component ={About} />

      </Switch>  
    </Router>
    </div>
  )
}


export default App;
