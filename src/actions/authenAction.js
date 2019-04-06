
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
  console.log(credentials);
  axios({
    method: 'post',
    url: `${API_ROOT}/admin/login`,
    data: {
      email: `${credentials.user.email}`,
      password: `${credentials.user.password}`
    }
  }).then(res => {
    console.log(res);
    // const {
    //   token
    // } = res.result.token;
    //console.log(token);
    if(res.data.result.success){
      dispatch({
      type : LOGIN_SUCCESS
    }) 
    } else return;
    // localStorage.setItem('token', token);    
    // setHeaderAuth(token);
    // const decoded = jwt_decode(token);
    // dispatch(setCurrentUser(decoded));
  }).catch(err => {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.response
    });
  })
}

export const currentUser=(token)=>dispatch=>{
  setHeaderAuth(token);
  const auth='Token '.concat(token);
  axios.get(`${API_ROOT}/admin/user`,{headers:{Authorization: auth}})
    .then(res=>{
      dispatch(setCurrentUser(res.data.user));
    })
  
}