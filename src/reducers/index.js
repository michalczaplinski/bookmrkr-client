// Set up your root reducer here...
import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

import * as types from '../actions/actionTypes';


export function sidebar(state={}, action) {
  switch (action.type) {
    case types.CLOSE_SIDEBAR:
      return objectAssign({}, state, {
        isOpen: false
      });

    case types.OPEN_SIDEBAR:
      return objectAssign({}, state, {
        isOpen: true
      });

    default:
      return state;
  }
}


export function bookmarks(state=[], action) {
  switch (action.type) {
    case types.INITIAL_DATA_LOADED:
      return action.data;

    default:
      return state;
  }
}


export function errors(state = { network: [], exceptions: [] }, action) {
  switch (action.type) {
    case types.INITIAL_DATA_ERROR:
      return [ ...state,
        { name: action.name,
          message: action.message,
          stack: action.stack
        }
      ];

    default:
      return state;
  }
}


export default combineReducers({
  sidebar,
  bookmarks,
  errors
});
