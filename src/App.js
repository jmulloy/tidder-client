import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Navbar.js'
import Welcome from './components/Welcome.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header className="Header"/>
      <div className='App-Header'>
        <Welcome />
      <h1>Posts Board</h1>
          <img src={logo} className="App-logo" alt="logo" />
       </div>
       {/* <PostsContainer /> */}
      </div>
    );
  }
}

export default App;
