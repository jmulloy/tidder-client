import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import About from './components/About.js'

import { Switch, Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header className="Header"/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/about' component={About} />
      </Switch>
        
      </div>
    );
  }
}

export default App;
