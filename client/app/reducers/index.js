// import { combineReducers } from 'redux';

export default function(state = '', action) {
  switch (action.type) {
    case 'POST_ONBOARD':
      return action.payload.data;
  }
  return state;
}
