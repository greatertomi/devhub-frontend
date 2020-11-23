import axios from 'axios'
import {FETCH_USER, LOGIN_USER, REGISTER_USER} from './types';

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
  const res = await axios.post(`${baseUrl}/users/login`, userDetails)
  const {token, _id} = res.data;
  if (token) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', _id);
  }
  dispatch({type: LOGIN_USER, payload: res.data})
}
