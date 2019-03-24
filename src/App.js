import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBarComponent from './component/NavbarComponent';
import SliderShow from './component/SliderShow';
import Register from './container/Register'
import Home from './container/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBarComponent />
          {/* <Route exact path= "/home" component = {Home} /> */}
          <Route path = "/register" component = { Register } />
        </div>
      </Router>
    );
  }
}

export default App;
