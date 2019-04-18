
import axios from 'axios';
import setAuthToken from '../setHeaderAuth';
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
  axios.post(`${API_ROOT}/login`, credentials)
    .then(res=>{      
      const  token  = res.data.token;
      localStorage.setItem('token',token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      console.log(decoded);
      dispatch(setCurrentUser(decoded));   
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response
      });
    })
}

export const currentUser=(token) => dispatch => {
  // setAuthToken(token);
  // const auth='Token '.concat(token);
  // axios.get(`${API_ROOT}/login`,{headers:{Authorization: auth}})
  //   .then(res=>{
  //     dispatch(setCurrentUser(res.data.user));
  //   })
  
}

export const signOut = () => dispatch => {
  localStorage.removeItem('token');
  setAuthToken(null);
  dispatch({
    type:'LOGOUT_SUCCESS',
    payload:null
  });
}