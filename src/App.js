import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBarComponent from './component/NavbarComponent';
import SliderShow from './component/SliderShow';
import Register from './container/Register';
import Home from './container/Home';
import Register1 from './component/Register';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBarComponent />
          <Route exact path= "/" component = {Home} />
          <Route path = "/register" component = { Register } />
          <Route path = "/register1" component = {Register1} />
        </div>
      </Router>
    );
  }
}

export default App;
