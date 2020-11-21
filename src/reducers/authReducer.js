import {FETCH_USER, LOGIN_USER, REGISTER_USER} from '../actions/types';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case REGISTER_USER:
      return action.payload;
    case LOGIN_USER:
      return action.payload;
    default:
      return state
  }
};

export default authReducer
