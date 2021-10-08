
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar.component';
import Home from './Home';
import Landing from './landing';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
           <div className="App">
            <Switch>
              <Route exact path='/' component={Landing}></Route>
              <Route exact path='/home' component={Home}></Route>
            </Switch>
          </div>
       </Router>
    </div>
  );
}

export default App;
