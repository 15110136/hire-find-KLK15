import axios from 'axios';

const API_ROOT = 'https://hire-find.herokuapp.com/api/iter';

export const registerITer = credentials => dispatch => {
  axios
      .post(`${API_ROOT}/register`, credentials)
      .then(({ data }) => {
        dispatch({
          type: 'REGISTER',
          payload: credentials
        })
      })
      .catch( ({ err }) => {
        console.log(err);
        
        // dispatch({
        //   type: 'REGISTER_ERROR',
        //   payload: err
        // })
      });
}

export const registerInfo = credentials => dispatch => {
  dispatch({
    type: 'REGISTER',
    payload: credentials
  })
}