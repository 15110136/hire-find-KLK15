import React from 'react';
//import { Link } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { connect } from 'react-redux';
import { signIn, currentUser } from "../../actions/authenAction";
import "../../assets/css/login.css"
import "../../assets/css/util.css"
import img from "../../assets/img/img.png"
import Tilt from 'react-tilt'
import validator from 'validator' 
import {Redirect} from 'react-router-dom'
import CircularProgress from './wait'
//Validation
const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
 
const email = (value) => {
  if (!validator.isEmail(value)) {
    return `$${value} is not a valid email.`
  }
};
 
const lt = (value, props) => {
  // get the maxLength from component's props
  if (!value.toString().trim().length > props.maxLength) {
    // Return jsx
    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
  }
};
 
// const passWord = (value, props, components) => {
//   // NOTE: Tricky place. The 'value' argument is always current component's value.
//   // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
//   // But if we're changing 'confirm' component - the condition will always be true
//   // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
//   if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
//     // 'confirm' - name of input
//     // components['confirm'] - array of same-name components because of checkboxes and radios
//     return <><span className="error">Passwords are not equal.</span></>
//   }
// };

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
    password: '',
    isLoading : false
    }
    if (localStorage.getItem('token')) {
      this.props.currentUser(localStorage.getItem('token'));
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isLoading : true
    })
    var credentials = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }
    this.props.signIn(credentials);    
  }
  
  render() {
    const { authError, auth } = this.props;
    if (auth.isAuthenticated) return <Redirect to='/admin/dashboard' />   
    return (     
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
                <Tilt className="login100-pic Tilt" data-tilt>
                  <img src={img} alt="IMG"/>
                </Tilt>
                <Form className="login100-form validate-form">
                  <span className="login100-form-title">
                     Admin Login                     
                  </span>    
                  <span className="login100-loading">                     
                     {/* {this.state.isLoading === true && <CircularProgress/>}      */}
                  </span>                               
                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <Input className="input100" type="text" name="email" validations={[required, email,lt]} onChange={this.handleChange} placeholder="Email@gmail.com" />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <Input name="password" className="input100" type="password" validations={[required,lt]} onChange={this.handleChange} placeholder="Password" />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="error">
                    {authError ? <p>{authError}</p> : null}
                  </div>
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn" onClick={this.handleSubmit}>
                      {this.state.isLoading == false ? 'Login' : <CircularProgress/>}
                    </button>
                  </div>
                </Form>   
              </div>
            </div>
          </div>          
    )
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
    currentUser: (token) => dispatch(currentUser(token))
  }
}

// export default LoginPage;
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)