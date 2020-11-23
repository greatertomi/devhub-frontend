import axios from 'axios'
import {AUTH_ERROR, FETCH_USER, LOGIN_USER, REGISTER_USER} from './types';

const baseUrl = 'http://localhost:5000/api/v1';

export const fetchAllUsers = () => async dispatch => {
  const res = await axios.get(`${baseUrl}/users`);

  dispatch({type: FETCH_USER, payload: res.data})
};

export const registerUser = userDetails => async dispatch => {
  const res = await axios.post(`${baseUrl}/users`, userDetails);
  dispatch({type: REGISTER_USER, payload: res.data})
};

export const loginUser = userDetails => async dispatch => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, userDetails)
    const {token, _id} = res.data;
    if (token) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', _id);
    }
    dispatch({type: LOGIN_USER, payload: res.data})
  } catch (err) {
    const data = {
      error: 'Auth failed!'
    }
    dispatch({type: AUTH_ERROR, payload: data})
  }
}

export const authTest = () => async dispatch => {
  const token = localStorage.getItem('authToken');
  const res = await axios.get(`${baseUrl}/users/authTest`, {
    headers: {
      'x-access-token': token
    }
  })
  console.log(res.data)
}
