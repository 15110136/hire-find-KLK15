import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBarComponent from './component/NavbarComponent';
import SliderShow from './component/SliderShow';
import RegisterITer from './container/RegisterITer';
import Home from './container/Home';
import Register from './container/Register';
import Profile from './container/Profile';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBarComponent />
          <Route exact path= "/" component = {Home} />
          <Route path = "/middle" component = {Register} />
          <Route path = "/register" component = { RegisterITer } />
          <Route path = "/profile" component = {Profile}/>
        </div>
      </Router>
    );
  }
}

export default App;
