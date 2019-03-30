import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn } from "../../actions/authenAction";

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    if (localStorage.getItem('token')) {
      this.props.currentUser(localStorage.getItem('token'));
    }
  }

  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
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

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field center">
            <button className="btn blue lighten-1 z-depth-0">Login</button>
          </div>
        </form>
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
    signIn: (credentials) => dispatch(signIn(credentials))
    // currentUser: (token) => dispatch(currentUser(token))
  }
}

// export default LoginPage;
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)