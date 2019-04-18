import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from 'react-redux'
import { registerEmailPassword } from '../actions/registerAction'
import axios from "axios";
import "../component/Register.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    let { email, password, confirmPassword } = this.state;
    let credentials = {
      email: email,
      password: password
    };
    if(password !== confirmPassword){
      alert("Vui lòng nhập lại mật khẩu!")
    }
    else{
    this.props.registerEmailPassword(credentials);
    this.props.props.history.push('/register')
  }
  };
  render() {
    console.log(this.props.register)
    return (
      <Form className="Form1" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mật Khẩu</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Nhập lại mật khẩu</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Input
          style={{ backgroundColor: "blue", color: "white" }}
          type="submit"
          value="Đăng Kí"
        />
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    register: state.register
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerEmailPassword: (credentials) => dispatch(registerEmailPassword(credentials))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
