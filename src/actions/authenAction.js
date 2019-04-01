
import axios from 'axios';
import setHeaderAuth from '../setHeaderAuth';
import jwt_decode from 'jwt-decode';

export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const API_ROOT = 'https://hire-find.herokuapp.com/api';

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

export const signIn = credentials => dispatch => {
  axios.post(`${API_ROOT}/admin/login`, credentials)
    .then(res => {
      const {
        token
      } = res.result;
      console.log(token);
      localStorage.setItem('token', token);
      setHeaderAuth(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));   
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response
      });
    });
  console.log(1);  
}