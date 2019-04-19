import axios from 'axios';

const API_ROOT = 'https://hire-find.herokuapp.com/api/iter';

export const registerITer = credentials => dispatch => {
  axios
      .post(`${API_ROOT}/register`, credentials)
      .then(({ data }) => {
        data.isSuccess ?
        dispatch({
          type: 'REGISTER',
          payload: credentials
        }) : dispatch({
          type: 'REGISTER_ERROR',
          payload: data.err
        })
      })
}

export const registerInfo = credentials => dispatch => {
  dispatch({
    type: 'REGISTER',
    payload: credentials
  })
}