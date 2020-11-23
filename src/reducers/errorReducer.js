import {AUTH_ERROR, REMOVE_ERROR} from "../actions/types";


const errorReducer = (state = null, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return action.payload
    case REMOVE_ERROR:
      return state
    default:
      return state
  }
};

export default errorReducer
