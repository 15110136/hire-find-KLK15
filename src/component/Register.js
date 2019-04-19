import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Container } from "reactstrap";
import { connect } from 'react-redux'
import { registerInfo } from '../actions/registerAction'
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
    // if(!true){
    //   alert("Vui lòng kiểm tra lại !")
    // }
    if(password.length === 0 || email.length === 0 || password !== confirmPassword){
      alert("Vui lòng kiểm tra lại !")
    }
    else{
    this.props.registerInfo(credentials);
    this.props.props.history.push('/register')
  }
  };
  render() {
    return (
      <Container>
        <Label className="title">Đăng ký tài khoản ITer</Label>
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
      </Container>
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
    registerInfo: (credentials) => dispatch(registerInfo(credentials))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
