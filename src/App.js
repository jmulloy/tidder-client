import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import About from './components/About.js'
import PostsPreviewContainer from './containers/PostsPreviewContainer.js'
import PostsDisplayContainer from './containers/PostsDisplayContainer'

import { Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header className="Header"/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/about' component={About} />
        <Route exact path='/posts' component={PostsPreviewContainer} />
        <Route exact path='/posts/:postId' component={PostsDisplayContainer} />
        
      </Switch>
        
      </div>
    );
  }
}

export default App;
