import axios from 'axios';

const API_ROOT = 'https://hire-find.herokuapp.com/api/iter';

export const registerITer = credentials => dispatch => {
  console.log(credentials);
  axios
      .post("https://hire-find.herokuapp.com/api/iter/register", credentials)
      .then(() => {
        console.log(1)
        dispatch({
          type: 'REGISTER',
          payload: credentials
        })
      })
      .catch((error) => {
        dispatch({
          type: 'REGISTER_ERROR',
          payload: error
        })
      });
}

export const registerEmailPassword = credentials => dispatch => {
  console.log(credentials);
  dispatch({
    type: 'REGISTER',
    payload: credentials
  })
}