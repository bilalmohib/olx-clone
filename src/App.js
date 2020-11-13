import React from 'react';

import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import './App.css';

import Home from "./Components/Home.jsx";

import Categories from "./Components/Categories.jsx";

import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";

import AppRouter from './config/router'

function App() {
  return (
    
 

    <AppRouter/>

  
    
  );
}

export default App;
