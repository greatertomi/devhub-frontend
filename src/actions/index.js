import axios from 'axios'
import {FETCH_USER, REGISTER_USER} from './types';

const baseUrl = 'http://localhost:5000';

export const fetchAllUsers = () => async dispatch => {
  const res = await axios.get(`${baseUrl}/api/v1/users`);

  dispatch({type: FETCH_USER, payload: res.data})
};

export const registerUser = userDetails => async dispatch => {
  const res = await axios.post(`${baseUrl}/api/v1/users`, userDetails);
  dispatch({type: REGISTER_USER, payload: res.data})
};

