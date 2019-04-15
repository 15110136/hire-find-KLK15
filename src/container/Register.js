import React, { Component } from 'react';
import RIter from '../component/Register';
import '../component/Register.css';
export default class Register extends Component {
  render() {
    
    return (
      <div className="registerFlex" >
        <RIter props = { this.props } />
      </div>
    )
  }
}